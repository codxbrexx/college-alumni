import { ApiError } from "../utils/ApiError.utils.js"
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"

export const verifyJWT = async (req,_,next) => {
    try {
        const token = req.cookies?.accessToken || req.headers?.authorization?.replace("Bearer ", "")

        if(!token)
            throw new ApiError(401, null, "Unauthorized access")

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

        if(!user)
            throw new ApiError(401, null, "Invalid access token")

        req.user = user
        next()
        
    } catch (error) {
        throw new ApiError(401, null, "Unauthorized access")
    }
}