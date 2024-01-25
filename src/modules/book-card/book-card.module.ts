import { Module } from '@nestjs/common';
import { BookCardService } from './book-card.service';
import { BookCardController } from './book-card.controller';
import { BookCard } from './entities/book-card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BookCard])],
  controllers: [BookCardController],
  providers: [BookCardService],
})
export class BookCardModule {}
