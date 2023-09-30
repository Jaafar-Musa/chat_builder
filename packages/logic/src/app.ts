import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import router from "./routes"

const app = express()

app.use(helmet())
app.use(morgan("tiny"))

app.use("/", router)

export default app