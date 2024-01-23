import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../common/auth/jwt-strategy';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService : ConfigService) => {
        return {
        secret : process.env.JWT_SECRET || configService.get<string>('jwt.secret'),
        expiresIn: process.env.JWT_EXPIRED_IN || configService.get('jwt.expiredIn')
        };
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}
