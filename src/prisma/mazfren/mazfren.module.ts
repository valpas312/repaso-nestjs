import { Module } from '@nestjs/common';
import { MazfrenPrismaService } from './mazfren.service';
import { MazfrenController } from './mazfren.controller';

@Module({
  providers: [MazfrenPrismaService],
  controllers: [MazfrenController]
})
export class MazfrenModule {}
