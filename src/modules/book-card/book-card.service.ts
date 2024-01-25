import { Injectable } from '@nestjs/common';
import { CreateBookCardDto } from './dto/create-book-card.dto';
import { UpdateBookCardDto } from './dto/update-book-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookCard } from './entities/book-card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookCardService {

  constructor(
    @InjectRepository(BookCard)
    private bookCardReporitory : Repository<BookCard> 
  ){}
  // async create(createBookCardDto: CreateBookCardDto) {
  //   return 'This action adds a new bookCard';
  // }

  async getAllBookCards() : Promise<BookCard[]> {
    return await this.bookCardReporitory.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} bookCard`;
  // }

  // update(id: number, updateBookCardDto: UpdateBookCardDto) {
  //   return `This action updates a #${id} bookCard`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} bookCard`;
  // }
}
