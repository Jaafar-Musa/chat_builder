import { IErrorResponse } from "../types/ErrorResponse";

abstract class CustomError extends Error{
    abstract readonly error : IErrorResponse
    abstract readonly statusCode : number

    /**
     * Init the class with message needed
     */
    constructor(message ?:string) {
        super(message);
        
        Object.setPrototypeOf(this,CustomError.prototype)
    }
}

export default CustomError