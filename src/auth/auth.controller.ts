import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authservice: AuthService){}
    @Post('signin')
    signin(@Req() req:Request){
        console.log(req.body);
        return this.authservice.signin();
    }
    @Post('signup')
    signup(){
        return this.authservice.signup();
    }
}
