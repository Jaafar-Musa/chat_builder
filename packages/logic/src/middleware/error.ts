import { NextFunction, Request, Response } from "express";
import config from "../config";
import { IErrorResponse } from "../types/ErrorResponse";

/**
 * Global error handling in app
 */
export default (
  err: Error,
  req: Request,
  res: Response<IErrorResponse>,
  _: NextFunction
) => {
  const resJSON: IErrorResponse = {
    message: err.message,
    stack: config.NODE_ENV === "development" ? err?.stack : "",
  };
  res.json(resJSON);
};
