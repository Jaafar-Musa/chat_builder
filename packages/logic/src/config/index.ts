import { IENV } from "./global";
import dotenv from "dotenv"

dotenv.config({path:`.env.${process.env.NODE_ENV}`,})

export default {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV ?? "development"
} satisfies IENV