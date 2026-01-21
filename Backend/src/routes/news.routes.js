import { Router } from "express"
import { createNews, deleteNews, getAllNews, getNewsById, updateNews } from "../controller/news.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js"

const router = Router()

router.get("/", getAllNews)
router.get("/:id", getNewsById)

router.use(verifyJWT)

router.post("/", createNews)
router.put("/:id", updateNews)
router.delete("/:id", deleteNews)

export default router
