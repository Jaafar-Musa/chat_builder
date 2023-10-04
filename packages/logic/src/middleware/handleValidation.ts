import { IValidationMW } from "../types";
import { NextFunction, Request, Response } from "express";

const handleValidation = (validate:IValidationMW)=> async (req:Request, res:Response,next:NextFunction)=>{
    if(validate.body) req.body = await validate.body.parseAsync(req.body)
}