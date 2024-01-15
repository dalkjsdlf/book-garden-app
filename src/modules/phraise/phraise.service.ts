import { Injectable } from '@nestjs/common';
import { CreatePhraiseDto } from './dto/create-phraise.dto';
import { UpdatePhraiseDto } from './dto/update-phraise.dto';

@Injectable()
export class PhraiseService {
  create(createPhraiseDto: CreatePhraiseDto) {
    return 'This action adds a new phraise';
  }

  findAll() {
    return `This action returns all phraise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phraise`;
  }

  update(id: number, updatePhraiseDto: UpdatePhraiseDto) {
    return `This action updates a #${id} phraise`;
  }

  remove(id: number) {
    return `This action removes a #${id} phraise`;
  }
}
