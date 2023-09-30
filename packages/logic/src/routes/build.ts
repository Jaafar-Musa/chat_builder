import { Router } from "express";
import { BadRequest } from "../errors";

const router = Router()

router.get("/",(req,res)=>{
    throw new BadRequest("tes")
    res.send("The server is live")
})

export default router