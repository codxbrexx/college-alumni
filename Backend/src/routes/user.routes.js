import { Router } from "express"
import { forgotPassword, loginUser, logoutUser, registerUser, resetPassword, refreshAccessToken } from "../controller/user.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js"
import { authLimiter, passwordResetLimiter } from "../middleware/rateLimiter.middleware.js"

const router = Router()

// Apply rate limiting to sensitive auth endpoints
router.post("/register", authLimiter, registerUser)
router.post("/login", authLimiter, loginUser)
router.post("/refresh-token", refreshAccessToken)
router.post("/forgot", passwordResetLimiter, forgotPassword)
router.post("/createpassword", passwordResetLimiter, resetPassword)
router.post("/logout", verifyJWT, logoutUser)

export default router