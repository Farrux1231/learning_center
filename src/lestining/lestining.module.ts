import { Module } from '@nestjs/common';
import { LestiningService } from './lestining.service';
import { LestiningController } from './lestining.controller';

@Module({
  controllers: [LestiningController],
  providers: [LestiningService],
})
export class LestiningModule {}
