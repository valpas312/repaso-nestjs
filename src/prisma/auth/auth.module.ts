import { Module } from '@nestjs/common';
import { AuthPrismaService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthPrismaService],
  controllers: [AuthController]
})
export class AuthModule {}
