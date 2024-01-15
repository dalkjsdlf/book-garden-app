import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigProvider implements TypeOrmOptionsFactory{
    private logger = new Logger();
    constructor(
        private configService : ConfigService
    ){}
    createTypeOrmOptions(): TypeOrmModuleOptions {
        const dbConfig = this.configService.get('db');

        console.log(dbConfig); 
        this.logger.debug(`dbConfig type     [${dbConfig.type}]`)
        this.logger.debug(`dbConfig host     [${dbConfig.host}]`)
        this.logger.debug(`dbConfig port     [${dbConfig.port}]`)
        this.logger.debug(`dbConfig database [${dbConfig.database}]`)
 
        return {
            type : dbConfig.type,
            host : process.env.RDS_HOSTNAME     || dbConfig.host,
            port : process.env.RDS_PORT         || dbConfig.port,
            username : process.env.RDS_USERNAME || dbConfig.username,
            password : process.env.RDS_PASSWORD || dbConfig.password,
            database : process.env.RDS_DB_NAME  || dbConfig.database,
            entities : [__dirname + '/../**/*.entity.{js,ts}'],
            synchronize: dbConfig.synchronize
          };
    }
}