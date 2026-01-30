import { User } from "../model/user.model.js"
import { ApiError } from "../utils/ApiError.utils.js"
import { ApiResponse } from "../utils/ApiResponse.utils.js"
import { uploadOnCloudinary } from "../utils/cloudinary.utils.js"
import mongoose from "mongoose"

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
            company,
            skills,
            sortBy = 'createdAt',
            order = 'desc',
            page = 1,
            limit = 12
        } = req.query

        const query = { isVerified: true, isProfileComplete: true }
        const sort = {}

        // Text search using MongoDB text index (SRS §3.3.2)
        if (search && search.trim()) {
            query.$text = { $search: search.trim() }
            // Add text score for relevance sorting
            sort.score = { $meta: 'textScore' }
        }

        // Field-specific filters
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

        if (company) {
            query.companyDetails = { $regex: company, $options: "i" }
        }

        // Skills filtering (match any skill in array)
        if (skills) {
            const skillsArray = skills.split(',').map(s => s.trim()).filter(Boolean)
            if (skillsArray.length > 0) {
                query.skills = { $in: skillsArray.map(skill => new RegExp(skill, 'i')) }
            }
        }

        // Sorting
        if (!search) { // Use custom sort only if not text searching
            const sortOrder = order === 'asc' ? 1 : -1
            sort[sortBy] = sortOrder
        }

        const skip = (parseInt(page) - 1) * parseInt(limit)

        const [alumni, total] = await Promise.all([
            User.find(query)
                .select("-password -refreshToken -resetPasswordToken -resetPasswordExpires")
                .sort(sort)
                .skip(skip)
                .limit(parseInt(limit))
                .lean(),
            User.countDocuments(query)
        ])

        // Add role virtual to each alumni (since we're using lean())
        const alumniWithRole = alumni.map(user => {
            const currentYear = new Date().getFullYear()
            return {
                ...user,
                role: user.yearOfPassout && user.yearOfPassout > currentYear ? 'Student' : 'Alumni'
            }
        })

        return res.status(200).json(
            new ApiResponse(200, {
                alumni: alumniWithRole,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / parseInt(limit))
                },
                filters: {
                    search, branch, yearOfPassout, city, state, company, skills
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

        if (!mongoose.isValidObjectId(id)) {
            throw new ApiError(400, "Invalid alumni ID format")
        }

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
