import { User } from "../model/user.model.js"
import { ApiError } from "../utils/ApiError.utils.js"
import { ApiResponse } from "../utils/ApiResponse.utils.js"
import { uploadOnCloudinary } from "../utils/cloudinary.utils.js"

const getCurrentUser = async (req, res, next) => {
    try {
        return res.status(200).json(
            new ApiResponse(200, req.user.toSafeObject(), "User profile fetched successfully")
        )
    } catch (error) {
        return next(error)
    }
}

const updateProfile = async (req, res, next) => {
    try {
        const {
            fullName,
            city,
            state,
            profession,
            yearOfPassout,
            linkedInProfileLink,
            gitHubProfileLink,
            companyDetails,
            companyExperience,
            aboutYou,
            branch,
            skills
        } = req.body

        const updateFields = {}

        if (fullName !== undefined) updateFields.fullName = fullName
        if (city !== undefined) updateFields.city = city
        if (state !== undefined) updateFields.state = state
        if (profession !== undefined) updateFields.profession = profession
        if (yearOfPassout !== undefined) updateFields.yearOfPassout = yearOfPassout
        if (linkedInProfileLink !== undefined) updateFields.linkedInProfileLink = linkedInProfileLink
        if (gitHubProfileLink !== undefined) updateFields.gitHubProfileLink = gitHubProfileLink
        if (companyDetails !== undefined) updateFields.companyDetails = companyDetails
        if (companyExperience !== undefined) updateFields.companyExperience = companyExperience
        if (aboutYou !== undefined) updateFields.aboutYou = aboutYou
        if (branch !== undefined) updateFields.branch = branch

        if (skills !== undefined) {
            updateFields.skills = Array.isArray(skills)
                ? skills
                : `${skills || ""}`
                    .split(",")
                    .map((skill) => skill.trim())
                    .filter(Boolean)
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            { $set: updateFields },
            { new: true }
        )

        return res.status(200).json(
            new ApiResponse(200, updatedUser.toSafeObject(), "Profile updated successfully")
        )
    } catch (error) {
        return next(error)
    }
}

const updateAvatar = async (req, res, next) => {
    try {
        const avatarLocalPath = req.file?.path

        if (!avatarLocalPath) {
            throw new ApiError(400, "Avatar file is required")
        }

        const avatar = await uploadOnCloudinary(avatarLocalPath)

        if (!avatar?.url) {
            throw new ApiError(500, "Error while uploading avatar")
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            { $set: { avatar: avatar.url } },
            { new: true }
        )

        return res.status(200).json(
            new ApiResponse(200, updatedUser.toSafeObject(), "Avatar updated successfully")
        )
    } catch (error) {
        return next(error)
    }
}

const getAllAlumni = async (req, res, next) => {
    try {
        const {
            search,
            branch,
            yearOfPassout,
            city,
            state,
            page = 1,
            limit = 12
        } = req.query

        const query = { isVerified: true }

        if (search) {
            query.$or = [
                { username: { $regex: search, $options: "i" } },
                { fullName: { $regex: search, $options: "i" } },
                { profession: { $regex: search, $options: "i" } },
                { companyDetails: { $regex: search, $options: "i" } }
            ]
        }

        if (branch) {
            query.branch = { $regex: branch, $options: "i" }
        }

        if (yearOfPassout) {
            query.yearOfPassout = parseInt(yearOfPassout)
        }

        if (city) {
            query.city = { $regex: city, $options: "i" }
        }

        if (state) {
            query.state = { $regex: state, $options: "i" }
        }

        const skip = (parseInt(page) - 1) * parseInt(limit)

        const [alumni, total] = await Promise.all([
            User.find(query)
                .select("-password -refreshToken -resetPasswordToken -resetPasswordExpires")
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(parseInt(limit)),
            User.countDocuments(query)
        ])

        return res.status(200).json(
            new ApiResponse(200, {
                alumni,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / parseInt(limit))
                }
            }, "Alumni fetched successfully")
        )
    } catch (error) {
        return next(error)
    }
}

const getAlumniById = async (req, res, next) => {
    try {
        const { id } = req.params

        const alumni = await User.findById(id).select(
            "-password -refreshToken -resetPasswordToken -resetPasswordExpires"
        )

        if (!alumni) {
            throw new ApiError(404, "Alumni not found")
        }

        return res.status(200).json(new ApiResponse(200, alumni, "Alumni fetched successfully"))
    } catch (error) {
        return next(error)
    }
}

export {
    getCurrentUser,
    updateProfile,
    updateAvatar,
    getAllAlumni,
    getAlumniById
}
