import { Router } from "express"
import {
    createJob,
    deleteJob,
    getAllJobs,
    getJobById,
    getMyJobs,
    updateJob,
    approveJob,
    rejectJob,
    getPendingJobs,
    saveJob,
    unsaveJob,
    getSavedJobs
} from "../controller/job.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js"
import { requireAdmin } from "../middleware/roleCheck.middleware.js"

const router = Router()

// Public routes
router.get("/", getAllJobs)
router.get("/:id", getJobById)

// Protected routes (authenticated users)
router.use(verifyJWT)

router.post("/", createJob)
router.get("/user/me", getMyJobs)
router.put("/:id", updateJob)
router.delete("/:id", deleteJob)

// Bookmark routes (SRS §3.4.2)
router.post("/:id/save", saveJob)
router.delete("/:id/save", unsaveJob)
router.get("/saved/all", getSavedJobs) // Note: /saved/all to avoid conflict with /:id

// Moderation routes - Admin only (SRS §3.4.1)
router.post("/:id/approve", requireAdmin, approveJob)
router.post("/:id/reject", requireAdmin, rejectJob)
router.get("/moderation/pending", requireAdmin, getPendingJobs)

export default router
