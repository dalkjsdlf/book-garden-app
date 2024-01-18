import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookCardService } from './book-card.service';
import { CreateBookCardDto } from './dto/create-book-card.dto';
import { UpdateBookCardDto } from './dto/update-book-card.dto';

@Controller('api/bookCard')
export class BookCardController {
  constructor(private readonly bookCardService: BookCardService) {}

  @Post()
  create(@Body() createBookCardDto: CreateBookCardDto) {
    return this.bookCardService.create(createBookCardDto);
  }

  @Get()
  findAll() {
    return this.bookCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookCardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookCardDto: UpdateBookCardDto) {
    return this.bookCardService.update(+id, updateBookCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookCardService.remove(+id);
  }
}
