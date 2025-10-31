import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TasksModule } from './tasks/tasks.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FrasleModule } from './prisma/frasle/frasle.module';
import { FraslePrismaService } from './prisma/frasle/frasle.service';
import { SacModule } from './sac/sac.module';
import { MazfrenModule } from './prisma/mazfren/mazfren.module';
import { MazfrenPrismaService } from './prisma/mazfren/mazfren.service';

@Module({
  imports: [TasksModule, PrismaModule, AuthModule, UsersModule, FrasleModule, SacModule, MazfrenModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, FraslePrismaService, MazfrenPrismaService],
})
export class AppModule {}
