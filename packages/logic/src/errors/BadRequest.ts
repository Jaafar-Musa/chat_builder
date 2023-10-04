import { IErrorResponse } from "../types";
import CustomError from "./CustomError";

class BadRequest extends CustomError{
    private readonly _statusCode :number 
    private readonly _error: IErrorResponse

    constructor(message:string) {
        super(message);
        this._error = {message}
        this._statusCode = 400
        Object.setPrototypeOf(this,BadRequest.prototype)
    }

    get error(){
        return this._error
    }
    get statusCode(){
        return this._statusCode
    }
}

export default BadRequest