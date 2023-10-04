declare global{
    namespace NodeJS{
        interface ProcessEnv extends IENV{}
    }
}

export interface IENV{
    PORT?:string;
    NODE_ENV?:"development" | "production" | "staging"
    MONGO_HOST?:string,
    MONGO_USERNAME?:string,
    MONGO_PASSWORD?:string,
    MONGO_PORT?:string,
    MONGO_DBNAME?:string,
    MONGO_LOCAL?:string,
  
}