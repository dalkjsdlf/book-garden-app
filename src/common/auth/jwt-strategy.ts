import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy, ExtractJwt } from "passport-jwt";
import { User } from "src/modules/user/entities/User";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>,
        private configService : ConfigService
    ){
        console.log("jwtStrategy constructor");
        
        super({
            secretOrKey : process.env.JWT_SECRET || configService.get('jwt.secret'),
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload){
        console.log("jwt Validation");
        const {userId} = payload;
        const user = await this.userRepository.findOne({where : {userId : "dd"},});
        if(!user){
            throw new UnauthorizedException(`[${userId}]은 인가되지 않은 사용자 입니다.`);
        }

        return user;
    }

}