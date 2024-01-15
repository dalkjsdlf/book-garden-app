import { PartialType } from '@nestjs/mapped-types';
import { CreatePhraiseDto } from './create-phraise.dto';

export class UpdatePhraiseDto extends PartialType(CreatePhraiseDto) {}
