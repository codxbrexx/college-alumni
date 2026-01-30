import { Router } from "express"
import { getAllAlumni, getAlumniById, getCurrentUser, updateAvatar } from "../controller/alumni.controller.js"
import { updateAccountDetails } from "../controller/user.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js"
import { upload } from "../middleware/multer.middleware.js"

const router = Router()

router.get("/", getAllAlumni)

// Specific routes must come before wildcard routes
router.get("/me", verifyJWT, getCurrentUser)
router.patch("/me", verifyJWT, updateAccountDetails)
router.patch("/me/avatar", verifyJWT, upload.single("avatar"), updateAvatar)

// Wildcard route
router.get("/:id", getAlumniById)

export default router
