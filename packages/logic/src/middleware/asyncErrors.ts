import {Request, Response, NextFunction} from "express"

type ExpressFn = (req:Request, res:Response, next:NextFunction)=>Promise<void>

/**
 * Handle errors on async routes
 * @param fn - express route mw
 * @description handles promise and calls next with err
 */
export const asyncErrors = (fn:ExpressFn)=>(req:Request, res:Response, next:NextFunction)=>{
    fn(req,res,next).catch(next)
}
