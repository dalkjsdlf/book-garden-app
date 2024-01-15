import { Injectable } from '@nestjs/common';
import { CreateBookCardDto } from './dto/create-book-card.dto';
import { UpdateBookCardDto } from './dto/update-book-card.dto';

@Injectable()
export class BookCardService {
  create(createBookCardDto: CreateBookCardDto) {
    return 'This action adds a new bookCard';
  }

  findAll() {
    return `This action returns all bookCard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookCard`;
  }

  update(id: number, updateBookCardDto: UpdateBookCardDto) {
    return `This action updates a #${id} bookCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookCard`;
  }
}
