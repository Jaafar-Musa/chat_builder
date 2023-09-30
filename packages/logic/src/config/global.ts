declare global{
    namespace NodeJS{
        interface ProcessEnv extends IENV{}
    }
}

export interface IENV{
    PORT?:string;
    NODE_ENV?:"development" | "production" | "staging"
}