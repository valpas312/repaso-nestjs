import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { FrasleModule } from './frasle/frasle.module';

@Module({
    providers: [PrismaService],
    exports: [PrismaService],
    imports: [FrasleModule],
})
export class PrismaModule {}
