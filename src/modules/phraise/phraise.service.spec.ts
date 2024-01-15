import { Test, TestingModule } from '@nestjs/testing';
import { PhraiseService } from './phraise.service';

describe('PhraiseService', () => {
  let service: PhraiseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhraiseService],
    }).compile();

    service = module.get<PhraiseService>(PhraiseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
