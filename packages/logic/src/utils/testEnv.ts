import app from "../app"
import redisClient from "./redis"

afterAll(()=>{
    redisClient.quit()
})