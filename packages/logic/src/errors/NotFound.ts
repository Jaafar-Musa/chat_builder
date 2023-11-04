import { IErrorResponse } from "../types";
import CustomError from "./CustomError";

class NotFound extends CustomError{
    private readonly _statusCode : number
    private readonly _error : IErrorResponse
    /**
     *
     */
    constructor(msg:string) {
        super(msg);
        this._error = {message:msg}
        this._statusCode = 404
        Object.setPrototypeOf(this,NotFound.prototype)
    }
    get statusCode(){
        return this._statusCode
    }
    get error(){
        return this._error
    }
}
export default NotFound
