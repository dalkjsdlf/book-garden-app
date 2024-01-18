import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SysConst } from 'src/common/const/system.const';
import { User } from '../user/entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
    
    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>,
        private jwtService : JwtService
        ){
    }
    
    //signup
    async signUp(createUserDto : CreateUserDto) : Promise<void> {
        console.log("signUp Service ", createUserDto);
        console.log("signUp Controller ", createUserDto);
        //Dto Destructuring
        const {userId, name, email, password} = createUserDto;

        const salt = await bcrypt.genSalt();
        const hashedPassowrd = await bcrypt.hash(password, salt);

        //입력할 User객체 생성
        const user : User          = this.userRepository.create({
                                        userId,
                                        name,
                                        email,
                                        password : hashedPassowrd
                                     });

        try{
            //DB에 저장                             
            await this.userRepository.save(user);
        }catch(error){
            console.log(`err code : [${error.code}]`);
            console.log(`err code : [${error.message}]`);
            if(error.code === SysConst.SQL_DUP_CODE ){
                throw new ConflictException(`userId [${user.userId}] already exists`);
            }else{
                throw new InternalServerErrorException();
            }
        }
    }

    //signin
    async signIn(authCredentialDto : AuthCredentialDto) : Promise<{accessToken : string}>{
        const {userId, password} = authCredentialDto;

        const user : User = await this.userRepository.findOne({where:{userId:userId}});
        
        //console.log(`요청으로 들어온 password >> [${password}] ,   DB에서 조회한 passowrd [${user.password}]`);
        if(user && (await bcrypt.compare(password, user.password))){
            console.log(`[${userId}] << userid`);
            const payload = {userId}
            const accessToken : string = await this.jwtService.sign(payload);
            
            return {accessToken};
        }else{
            throw new UnauthorizedException('login failed');
        }

    }
}
