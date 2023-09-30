import { NextFunction, Request, Response } from "express";

export const error = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    const resJSON = {
        message: err.message,
    }
    
    res.json()

}

