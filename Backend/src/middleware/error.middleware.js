import { ApiError } from "../utils/ApiError.utils.js"
import { ApiResponse } from "../utils/ApiResponse.utils.js"

export const notFoundHandler = (_req, res) => {
    return res.status(404).json(new ApiResponse(404, null, "Route not found"))
}

export const errorHandler = (err, _req, res, _next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors || [],
            data: err.data || null
        })
    }

    console.error("Unhandled error", err)
    return res.status(500).json({
        success: false,
        message: "Internal server error"
    })
}
