import { Router } from "express"
import { createJob, deleteJob, getAllJobs, getJobById, getMyJobs, updateJob } from "../controller/job.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js"

const router = Router()

router.get("/", getAllJobs)
router.get("/:id", getJobById)

router.use(verifyJWT)

router.post("/", createJob)
router.get("/user/me", getMyJobs)
router.put("/:id", updateJob)
router.delete("/:id", deleteJob)

export default router
