import crypto from "crypto"
import bcrypt from "bcryptjs"
import { User } from "../model/user.model.js"
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

const issueTokens = async (user) => {
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()
    user.refreshToken = refreshToken
    await user.save({ validateBeforeSave: false })
    return { accessToken, refreshToken }
}

const registerUser = asyncHandler(async (req, res) => {
    const {
        email,
        password,
        username,
        rollNo,
        fullName,
        city,
        state,
        profession,
        linkedInProfileLink,
        companyExperience,
        aboutYou,
        skills = []
    } = req.body

    if ([email, username, password, rollNo].some((field) => !field || `${field}`.trim() === "")) {
        throw new ApiError(400, "Email, username, roll number, and password are required")
    }

    const existingUser = await User.findOne({
        $or: [{ username: username.toLowerCase() }, { email: email.toLowerCase() }]
    })

    if (existingUser) {
        throw new ApiError(409, "User with this email or username already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const parsedSkills = Array.isArray(skills)
        ? skills
        : `${skills || ""}`
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean)

    const user = await User.create({
        email,
        password: hashedPassword,
        username: username.toLowerCase(),
        rollNo,
        fullName,
        city,
        state,
        profession,
        linkedInProfileLink,
        companyExperience,
        aboutYou,
        skills: parsedSkills
    })

    const { accessToken, refreshToken } = await issueTokens(user)
    attachAuthCookies(res, accessToken, refreshToken)

    return res.status(201).json(
        new ApiResponse(201, { user: user.toSafeObject(), accessToken }, "User registered successfully")
    )
})

const loginUser = asyncHandler(async (req, res) => {
    const { identifier, password } = req.body

    if (!identifier || !password) {
        throw new ApiError(400, "Email or username and password are required")
    }

    const user = await User.findOne({
        $or: [
            { email: identifier.toLowerCase() },
            { username: identifier.toLowerCase() }
        ]
    })

    if (!user) {
        throw new ApiError(404, "User not found")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid credentials")
    }

    const { accessToken, refreshToken } = await issueTokens(user)
    attachAuthCookies(res, accessToken, refreshToken)

    return res.status(200).json(
        new ApiResponse(200, { user: user.toSafeObject(), accessToken }, "Login successful")
    )
})

const logoutUser = asyncHandler(async (req, res) => {
    if (req.user) {
        req.user.refreshToken = null
        await req.user.save({ validateBeforeSave: false })
    }

    res.clearCookie("accessToken", cookieBaseConfig)
    res.clearCookie("refreshToken", cookieBaseConfig)

    return res.status(200).json(new ApiResponse(200, null, "Logged out successfully"))
})

const forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body

    if (!email) {
        throw new ApiError(400, "Email is required")
    }

    const user = await User.findOne({ email: email.toLowerCase() })

    if (!user) {
        throw new ApiError(404, "No account found with this email")
    }

    const rawToken = crypto.randomBytes(32).toString("hex")
    const hashedToken = crypto.createHash("sha256").update(rawToken).digest("hex")

    user.resetPasswordToken = hashedToken
    user.resetPasswordExpires = new Date(Date.now() + 30 * 60 * 1000) // 30 minutes
    await user.save({ validateBeforeSave: false })

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                resetToken: rawToken,
                expiresAt: user.resetPasswordExpires
            },
            "Password reset token generated. In production, send this via email."
        )
    )
})

const updateAccountDetails = asyncHandler(async (req, res) => {
    const {
        fullName,
        city,
        state,
        profession,
        linkedInProfileLink,
        companyExperience,
        aboutYou,
        skills,
        yearOfPassout,
        rollNo,
        branch,
        companyDetails,
        gitHubProfileLink
    } = req.body

    const user = await User.findById(req.user?._id)

    if (!user) {
        throw new ApiError(404, "User not found")
    }

    // Update fields if provided
    if (fullName) user.fullName = fullName
    if (city) user.city = city
    if (state) user.state = state
    if (profession) user.profession = profession
    if (linkedInProfileLink) user.linkedInProfileLink = linkedInProfileLink
    if (companyExperience) user.companyExperience = companyExperience
    if (aboutYou) user.aboutYou = aboutYou
    if (yearOfPassout) user.yearOfPassout = yearOfPassout
    if (rollNo) user.rollNo = rollNo
    if (branch) user.branch = branch
    if (companyDetails) user.companyDetails = companyDetails
    if (gitHubProfileLink) user.gitHubProfileLink = gitHubProfileLink

    // Handle Skills (comma -> array)
    if (skills) {
        user.skills = Array.isArray(skills)
            ? skills
            : `${skills}`.split(",").map(s => s.trim()).filter(Boolean)
    }

    await user.save({ validateBeforeSave: false })

    return res.status(200).json(
        new ApiResponse(200, user.toSafeObject(), "Account details updated successfully")
    )
})

const resetPassword = asyncHandler(async (req, res) => {
    const { token, password } = req.body

    if (!token || !password) {
        throw new ApiError(400, "Token and new password are required")
    }

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex")

    const user = await User.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpires: { $gt: new Date() }
    })

    if (!user) {
        throw new ApiError(400, "Invalid or expired reset token")
    }

    user.password = await bcrypt.hash(password, 10)
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined

    const { accessToken, refreshToken } = await issueTokens(user)
    attachAuthCookies(res, accessToken, refreshToken)

    return res.status(200).json(
        new ApiResponse(200, { user: user.toSafeObject(), accessToken }, "Password updated successfully")
    )
})

export {
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword,
    updateAccountDetails
}