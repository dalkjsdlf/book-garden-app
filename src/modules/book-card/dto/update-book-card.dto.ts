import { PartialType } from '@nestjs/mapped-types';
import { CreateBookCardDto } from './create-book-card.dto';

export class UpdateBookCardDto extends PartialType(CreateBookCardDto) {}
