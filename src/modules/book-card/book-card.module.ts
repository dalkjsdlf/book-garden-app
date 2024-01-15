import { Module } from '@nestjs/common';
import { BookCardService } from './book-card.service';
import { BookCardController } from './book-card.controller';

@Module({
  controllers: [BookCardController],
  providers: [BookCardService],
})
export class BookCardModule {}
