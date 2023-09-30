import { Router } from "express";
import build from "./build"

const router = Router()

router.use("/ping",build)

export default router