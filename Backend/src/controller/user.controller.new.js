import crypto from "crypto"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "../model/user.model.js"
import { RefreshToken } from "../model/refreshToken.model.js"
import { ApiError } from "../utils/ApiError.utils.js"
import { ApiResponse } from "../utils/ApiResponse.utils.js"
import { asyncHandler } from "../utils/asyncHandler.utils.js"

const cookieBaseConfig = {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production"
}

const attachAuthCookies = (res, accessToken, refreshToken) => {
    res.cookie("accessToken", accessToken, {
        ...cookieBaseConfig,
        maxAge: 24 * 60 * 60 * 1000
    })

    res.cookie("refreshToken", refreshToken, {
        ...cookieBaseConfig,
        maxAge: 10 * 24 * 60 * 60 * 1000
    })
}

const issueTokens = async (user, ipAddress = null) => {
    const accessToken = user.generateAccessToken()
    const refreshTokenValue = user.generateRefreshToken()

    // Create refresh token in database for revocation support
    const expiryDays = parseInt(process.env.REFRESH_TOKEN_EXPIRY_DAYS) || 10
    const refreshToken = await RefreshToken.create({
        token: refreshTokenValue,
        userId: user._id,
        expiresAt: new Date(Date.now() + expiryDays * 24 * 60 * 60 * 1000),
        createdByIp: ipAddress
    })

    // Keep legacy refreshToken field for backward compatibility (can be removed later)
    user.refreshToken = refreshTokenValue
    await user.save({ validateBeforeSave: false })

    return { accessToken, refreshToken: refreshTokenValue }
}

/**
 * Refresh access token using refresh token (with rotation)
 * Per SRS §3.1.2: Refresh tokens must be rotated
 */
const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies?.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "Refresh token is required")
    }

    // Find refresh token in database
    const storedToken = await RefreshToken.findOne({ token: incomingRefreshToken })

    if (!storedToken) {
        throw new ApiError(401, "Invalid refresh token")
    }

    // Check if token is active (not revoked and not expired)
    if (!storedToken.isActive()) {
        throw new ApiError(401, "Refresh token is expired or revoked")
    }

    // Verify JWT
    let decodedToken
    try {
        decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET || 'refresh_secret')
    } catch (error) {
        throw new ApiError(401, "Invalid refresh token")
    }

    // Get user
    const user = await User.findById(decodedToken.sub)

    if (!user) {
        throw new ApiError(401, "Invalid refresh token")
    }

    // Rotate: Revoke old token and issue new ones
    const ipAddress = req.ip || req.connection.remoteAddress
    const { accessToken, refreshToken: newRefreshToken } = await issueTokens(user, ipAddress)

    // Mark old token as replaced
    await storedToken.revoke(newRefreshToken)

    attachAuthCookies(res, accessToken, newRefreshToken)

    return res.status(200).json(
        new ApiResponse(200, { user: user.toSafeObject(), accessToken }, "Access token refreshed successfully")
    )
})

export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    forgotPassword,
    resetPassword,
    updateAccountDetails,
    updateAvatar,
    getUserProfile,
    getAllUsers
}
