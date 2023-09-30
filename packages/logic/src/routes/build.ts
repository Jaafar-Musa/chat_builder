import { Router } from "express";

const router = Router()

router.get("/",(req,res)=>{
    res.send("The server is live")
})

export default router