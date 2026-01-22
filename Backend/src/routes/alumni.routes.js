import { Router } from "express"
import { getAllAlumni, getAlumniById, getCurrentUser, updateAvatar } from "../controller/alumni.controller.js"
import { updateAccountDetails } from "../controller/user.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js"
import { upload } from "../middleware/multer.middleware.js"

const router = Router()

router.get("/", getAllAlumni)
router.get("/:id", getAlumniById)

router.use(verifyJWT)

router.get("/me", getCurrentUser)
router.patch("/me", updateAccountDetails)
router.patch("/me/avatar", upload.single("avatar"), updateAvatar)

export default router
