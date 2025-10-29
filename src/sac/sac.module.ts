import { Module } from '@nestjs/common';
import { SacController } from './sac.controller';
import { FraslePrismaService } from 'src/prisma/frasle/frasle.service';
import { FrasleModule } from 'src/prisma/frasle/frasle.module';
import { SacService } from './sac.service';

@Module({
  controllers: [SacController],
  providers: [FraslePrismaService, SacService],
  imports: [SacModule, FrasleModule],
})
export class SacModule {}
