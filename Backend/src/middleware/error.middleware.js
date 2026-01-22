import { ApiError } from "../utils/ApiError.utils.js"
import { ApiResponse } from "../utils/ApiResponse.utils.js"

export const notFoundHandler = (_req, res) => {
    return res.status(404).json(new ApiResponse(404, null, "Route not found"))
}

export const errorHandler = (err, _req, res, _next) => {
    let error = err

    if (!(error instanceof ApiError)) {
        const statusCode = error.statusCode || 500
        const message = error.message || "Internal Server Error"
        error = new ApiError(statusCode, message, [], error.stack)
    }

    const response = {
        ...error,
        message: error.message,
        ...(process.env.NODE_ENV === "development" ? { stack: error.stack } : {})
    }

    return res.status(error.statusCode).json(response)
}
