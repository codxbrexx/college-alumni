import "dotenv/config"
import { app } from "./app.js"
import { connectDB } from "./src/database/dbConnect.js"

const port = process.env.PORT || 8000

const startServer = async () => {
    try {
        await connectDB()
        app.listen(port, () => {
            console.log(`⚙️ Server is running at port : ${port}`)
        })
    } catch (error) {
        console.error("Startup failed", error)
        process.exit(1)
    }
}

startServer()

// Export app for Vercel
export default app;