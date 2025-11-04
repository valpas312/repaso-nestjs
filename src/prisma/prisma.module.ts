import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { FrasleModule } from './frasle/frasle.module';
import { MazfrenModule } from './mazfren/mazfren.module';
import { AuthModule } from './auth/auth.module';

@Module({
    providers: [PrismaService],
    exports: [PrismaService],
    imports: [FrasleModule, MazfrenModule, AuthModule],
})
export class PrismaModule {}
