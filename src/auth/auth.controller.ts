import { Body, Controller, Get, ParseIntPipe, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authservice: AuthService){}
    @Post('signin')
    signin(@Body() dto: string){
        console.log(dto);
        return this.authservice.signin();
    }
    @Post('signup')
    signup(){
        return this.authservice.signup();
    }
}
