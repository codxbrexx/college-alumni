import { Router } from "express"
import { forgotPassword, loginUser, logoutUser, registerUser, resetPassword } from "../controller/user.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js"

const router = Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/forgot", forgotPassword)
router.post("/createpassword", resetPassword)
router.post("/logout", verifyJWT, logoutUser)

export default router