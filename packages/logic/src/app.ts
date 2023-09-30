import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import router from "./routes"
import cors from "cors"
import { errorMW, notFound } from "./middleware"
import "express-async-errors"


const app = express()

app.use(helmet())
app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())

app.use("/api/v1", router)

app.use(notFound)
app.use(errorMW)

export default app