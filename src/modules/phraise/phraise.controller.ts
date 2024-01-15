import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhraiseService } from './phraise.service';
import { CreatePhraiseDto } from './dto/create-phraise.dto';
import { UpdatePhraiseDto } from './dto/update-phraise.dto';

@Controller('phraise')
export class PhraiseController {
  constructor(private readonly phraiseService: PhraiseService) {}

  @Post()
  create(@Body() createPhraiseDto: CreatePhraiseDto) {
    return this.phraiseService.create(createPhraiseDto);
  }

  @Get()
  findAll() {
    return this.phraiseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phraiseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhraiseDto: UpdatePhraiseDto) {
    return this.phraiseService.update(+id, updatePhraiseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phraiseService.remove(+id);
  }
}
