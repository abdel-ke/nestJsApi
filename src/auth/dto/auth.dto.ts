import { isEmail, isNotEmpty, isString } from "class-validator";

export class AuthDto{
    @isEmail()
    @isNotEmpty()
    email : string;
    @isString()
    @isNotEmpty()
    password : string;
}
