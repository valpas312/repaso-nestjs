import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as SacClient } from '../../../generated/sac';

@Injectable()
export class AuthPrismaService extends SacClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}