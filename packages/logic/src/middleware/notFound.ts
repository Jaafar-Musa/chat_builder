import { NextFunction, Request, Response } from "express";
import { NotFound } from "../errors";
/**
 * Handles 404 pages
 */
export default (req: Request, res: Response, next: NextFunction) => {
    const error = new NotFound(`Not found - ${req.originalUrl}`)
    next(error)
};
