import { Module } from '@nestjs/common';
import { SacController } from './sac.controller';
import { FraslePrismaService } from 'src/prisma/frasle/frasle.service';
import { FrasleModule } from 'src/prisma/frasle/frasle.module';
import { SacService } from './sac.service';
import { MazfrenPrismaService } from 'src/prisma/mazfren/mazfren.service';
import { MazfrenModule } from 'src/prisma/mazfren/mazfren.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [SacController],
  providers: [FraslePrismaService, SacService, MazfrenPrismaService],
  imports: [SacModule, FrasleModule, MazfrenModule, AuthModule],
})
export class SacModule {}
