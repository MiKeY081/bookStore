import express from "express"
import morgan from "morgan"
import cors from "cors"
import { dbconnect } from "./config/dbconnect.js"
import { bookRoute } from "./routes/bookRoute.js"
import { config } from "dotenv"

const app = express()

config()
dbconnect()
app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
    origin: "https://bookstore-seven-nu.vercel.app",
    secure: true,
}))


app.use("/api/v1/book",bookRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log("Server is running", PORT)
})