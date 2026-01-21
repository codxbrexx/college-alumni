import { User } from "../model/user.model.js";
import { ApiError } from "../utils/ApiError.utils.js";
import { ApiResponse } from "../utils/ApiResponse.utils.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateAccessAndRefereshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = jwt.sign(
            {
                _id: user._id,
                email: user.email,
                username: user.username,
                fullName: user.fullName
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1d"
            }
        )
        const refreshToken = jwt.sign(
            {
                _id: user._id,

            },
            process.env.REFRESH_TOKEN_SECRET || "refresh_secret",
            {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "10d"
            }
        )

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser = async (req, res) => {
    try {
        const { email, password, username, rollNo, city, state, profession, linkedInProfileLink, companyExperience, aboutYou } = req.body

        if (
            [email, username, password].some((field) => field?.trim() === "")
        ) {
            throw new ApiError(400, "All fields are required")
        }

        const existedUser = await User.findOne({
            $or: [{ username }, { email }]
        })

        if (existedUser) {
            throw new ApiError(409, "User with email or username already exists")
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            password: hashedPassword,
            username: username.toLowerCase(),
            rollNo,
            city,
            state,
            profession,
            linkedInProfileLink,
            companyExperience,
            aboutYou
        })

        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        )

        if (!createdUser) {
            throw new ApiError(500, "Something went wrong while registering the user")
        }

        return res.status(201).json(
            new ApiResponse(200, createdUser, "User registered Successfully")
        )

    } catch (error) {
        console.log("Error in registerUser: ", error); // Sanity log
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message
            });
        }
        return res.status(500).json(
            new ApiResponse(500, {}, "Something went wrong while registering user")
        )
    }
}

export {
    registerUser,
}