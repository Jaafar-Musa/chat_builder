import { NextFunction, Request, Response } from "express";
import config from "../config";
import { IErrorResponse } from "../types/ErrorResponse";
import { CustomError } from "../errors";

/**
 * Global error handling in app
 */
export default (
  err: Error,
  req: Request,
  res: Response<IErrorResponse>,
  _: NextFunction
) => {
  res.status(500);
  const resJSON: IErrorResponse = {
    message: err.message,
    stack: config.NODE_ENV === "development" ? err?.stack : "",
  };
  if (err instanceof CustomError) {
    res.status(err.statusCode);
  }

  res.json(resJSON);
};
