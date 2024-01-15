import { Test, TestingModule } from '@nestjs/testing';
import { BookCardController } from './book-card.controller';
import { BookCardService } from './book-card.service';

describe('BookCardController', () => {
  let controller: BookCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookCardController],
      providers: [BookCardService],
    }).compile();

    controller = module.get<BookCardController>(BookCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
