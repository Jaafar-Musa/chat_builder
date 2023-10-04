import { Router } from "express";
import { ping } from "../services";

const router = Router()

router.get("/",ping)

export default router