import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from '../user/entities/user.entity';


@Controller('auth')
export class AuthController {
    
    constructor(private authService : AuthService){}

    @Post('/signup')
    async signUp(@Body(ValidationPipe) authCredentialDto : AuthCredentialDto) : Promise<void> {
        console.log("signUp Controller ", authCredentialDto);
        await this.authService.signUp(authCredentialDto);
    }

    @Post('/signIn')
    async signIn(@Body(ValidationPipe) authCredentialDto : AuthCredentialDto) : Promise<{accessToken : string}> {
        console.log("signIn Controller ", authCredentialDto);
        
        return await this.authService.signIn(authCredentialDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    async test(@GetUser() user : User){
        console.log('req',user);
    }

}
