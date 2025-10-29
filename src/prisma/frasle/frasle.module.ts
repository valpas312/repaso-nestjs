import { Module } from '@nestjs/common';
import { FraslePrismaService } from './frasle.service';
import { FrasleController } from './frasle.controller';

@Module({
  providers: [FraslePrismaService],
  controllers: [FrasleController]
})
export class FrasleModule {}
