import { IENV } from "./global";
import dotenv from "dotenv"

dotenv.config({path:`.env.${process.env.NODE_ENV}`,})

export default {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV ?? "development",
    MONGO_HOST : process.env.MONGO_HOST,
    MONGO_USERNAME : process.env.MONGO_USERNAME,
    MONGO_PASSWORD : process.env.MONGO_PASSWORD,
    MONGO_PORT : process.env.MONGO_PORT,
    MONGO_DBNAME : process.env.MONGO_DBNAME,
    MONGO_LOCAL : process.env.MONGO_LOCAL,  
    REDIS_URL  : process.env.REDIS_URL
} satisfies IENV