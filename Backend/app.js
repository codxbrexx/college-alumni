import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRoutes from "./src/routes/user.routes.js"
import jobRoutes from "./src/routes/job.routes.js"
import newsRoutes from "./src/routes/news.routes.js"
import alumniRoutes from "./src/routes/alumni.routes.js"
import placementRoutes from "./src/routes/placement.routes.js"
import { errorHandler, notFoundHandler } from "./src/middleware/error.middleware.js"

const app = express()

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173,http://localhost:3000")
    .split(",")
    .map((origin) => origin.trim())

app.disable("x-powered-by")
app.use(express.json({ limit: "1mb" }))
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    credentials: true,
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

// Enable pre-flight requests for all routes

app.use(express.static("public"))
app.use(cookieParser())

app.use("/api/auth", userRoutes)
app.use("/api/jobs", jobRoutes)
app.use("/api/news", newsRoutes)
app.use("/api/alumni", alumniRoutes)
app.use("/api/placements", placementRoutes)

app.use(notFoundHandler)
app.use(errorHandler)

export { app }
export default app