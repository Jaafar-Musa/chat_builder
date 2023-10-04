import { AnyZodObject } from "zod";

export interface IValidationMW{
    body?:AnyZodObject,
    param?:AnyZodObject,
    query?:AnyZodObject
}