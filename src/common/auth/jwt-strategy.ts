import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy, ExtractJwt } from "passport-jwt";
import { User } from "../../modules/user/entities/user.entity";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { CurrentUserService } from "../entity/current-user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>,
        private configService : ConfigService,
        private currentUserService : CurrentUserService
        ){
            const logger = new Logger();
            logger.debug(`config service jwt secret[${configService.get('jwt.secret')}]`);
            
            super({
                secretOrKey : process.env.JWT_SECRET || configService.get('jwt.secret'),
                jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken()
            })
        }
        
    async validate(payload){
        const logger = new Logger();
        logger.debug(`config service jwt secret[${this.configService.get('jwt.secret')}]`);
        const {userId} = payload;
        const user = await this.userRepository.findOne({where : {userId : "dd"},});
        
        if(!user){
            throw new UnauthorizedException(`[${userId}]은 인가되지 않은 사용자 입니다.`);
        }
        
        this.currentUserService.setUserId(userId);
        return user;
    }

}