import jwt from "jsonwebtoken"
import { ApiError } from "../utils/ApiError.utils.js"
import { User } from "../model/user.model.js"

export const verifyJWT = async (req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.headers?.authorization?.replace("Bearer ", "")

        if (!token) {
            throw new ApiError(401, "Unauthorized access")
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?.sub).select("-password -refreshToken")

        if (!user) {
            throw new ApiError(401, "Invalid access token")
        }

        req.user = user
        return next()
    } catch (error) {
        return next(new ApiError(401, "Unauthorized access"))
    }
}