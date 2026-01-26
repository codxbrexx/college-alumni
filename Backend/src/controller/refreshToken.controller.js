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
