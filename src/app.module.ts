import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { BookCardModule } from './modules/book-card/book-card.module';
import { BookModule } from './modules/book/book.module';
import { PhraiseModule } from './modules/phraise/phraise.module';
import { ArticleModule } from './modules/article/article.module';
import { ArticleCommentModule } from './modules/article-comment/article-comment.module';
import { LikeModule } from './modules/like/like.module';
import { TypeOrmConfigProvider } from './common/config/typeorm.config.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import config from './common/config/config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, 
            AuthModule,
            BookCardModule, 
            BookModule, 
            PhraiseModule, 
            ArticleModule, 
            ArticleCommentModule, 
            LikeModule,
            TypeOrmModule.forRootAsync({useClass : TypeOrmConfigProvider }),
            ConfigModule.forRoot({
              isGlobal: true,
              load:[config]
            }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
