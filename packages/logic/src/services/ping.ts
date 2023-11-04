import { NextFunction, Request, Response } from "express";
import config from "../config";
import redisClient from "../utils/redis";



export const ping = (req: Request, res: Response, next: NextFunction) => {
      redisClient.ping("Test")
        res.status(200).send("The server is live on port " + config.PORT);
  };
  