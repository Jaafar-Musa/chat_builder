import {createClient} from "redis"
import config from "../config"

const redisClient = createClient({url:config.REDIS_URL})
const redisConnection = async () =>{
    try{
        redisClient.connect()
        console.log("redis connected.")
    }catch(err:unknown){
        let e = err as Error
        console.log(e.message);
        process.exit(1);
    }
}

redisConnection()

redisClient.on("error", (err:Error)=> console.log("[ERR] REDIS ::: ",err))

export default redisClient