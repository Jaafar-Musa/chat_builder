import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../errors";

export const ping = (req: Request, res: Response, next: NextFunction) => {
  res.send("The server is live");
};

export const build = (req: Request, res: Response, next: NextFunction) => {};
