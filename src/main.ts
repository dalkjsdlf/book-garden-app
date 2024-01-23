import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SysConst } from './common/const/system.const';

async function bootstrap() {
  const logger = new Logger(); 
  const app = await NestFactory.create(AppModule);

  // config를 적용하기 위해 ConfigService를 가져온다.
  const configService = app.get(ConfigService);

  // common.yaml에 정의한 서버정보를 가져온다.
  const serverConfig = configService.get('server');
  
  const port = (!serverConfig.port)?SysConst.DEF_PORT:serverConfig.port;

  //app.use(RequestContextMiddleware);
  
  await app.listen(port, () => {
    logger.log("Book Garden Backend Server Started!");
    logger.log("=============================================");
    logger.log(`  PORT     : [${serverConfig.port}]`);
    logger.log("=============================================");
  });
}
bootstrap();
