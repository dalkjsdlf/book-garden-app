import { Test, TestingModule } from '@nestjs/testing';
import { BookCardService } from './book-card.service';

describe('BookCardService', () => {
  let service: BookCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookCardService],
    }).compile();

    service = module.get<BookCardService>(BookCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
