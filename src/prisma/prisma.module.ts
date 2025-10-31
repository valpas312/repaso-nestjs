import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { FrasleModule } from './frasle/frasle.module';
import { MazfrenModule } from './mazfren/mazfren.module';

@Module({
    providers: [PrismaService],
    exports: [PrismaService],
    imports: [FrasleModule, MazfrenModule],
})
export class PrismaModule {}
