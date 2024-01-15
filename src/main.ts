import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger(); 
  const app = await NestFactory.create(AppModule);

  // config를 적용하기 위해 ConfigService를 가져온다.
  const configService = app.get(ConfigService);
  console.log(configService);
  // common.yaml에 정의한 서버정보를 가져온다.
  const serverConfig = configService.get('server');
  console.log("serverConfig ",serverConfig);
  logger.log(`  config value     : [${serverConfig.port}]`);

  const port = (!serverConfig.port)?3000:serverConfig.port;
  await app.listen(port, () => {
    logger.log("Book Garden Backend Server Started!");
    logger.log("=============================================");
    logger.log(`  PORT     : [${serverConfig.port}]`);
    logger.log("=============================================");
  });
}
bootstrap();
