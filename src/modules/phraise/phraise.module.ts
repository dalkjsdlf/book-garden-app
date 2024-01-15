import { Module } from '@nestjs/common';
import { PhraiseService } from './phraise.service';
import { PhraiseController } from './phraise.controller';

@Module({
  controllers: [PhraiseController],
  providers: [PhraiseService],
})
export class PhraiseModule {}
