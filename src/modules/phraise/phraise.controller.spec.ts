import { Test, TestingModule } from '@nestjs/testing';
import { PhraiseController } from './phraise.controller';
import { PhraiseService } from './phraise.service';

describe('PhraiseController', () => {
  let controller: PhraiseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhraiseController],
      providers: [PhraiseService],
    }).compile();

    controller = module.get<PhraiseController>(PhraiseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
