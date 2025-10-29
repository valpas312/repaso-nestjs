import { Module } from '@nestjs/common';
import { SacService } from './sac.service';
import { SacController } from './sac.controller';

@Module({
  controllers: [SacController],
  providers: [SacService],
})
export class SacModule {}
