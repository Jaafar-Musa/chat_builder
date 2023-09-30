import app from "./app"
import config from "./config"

app.listen(config.PORT,()=>{
    console.log(config.NODE_ENV)
    console.log(`Chat builder GEN listening on port ${config.PORT}`)
})