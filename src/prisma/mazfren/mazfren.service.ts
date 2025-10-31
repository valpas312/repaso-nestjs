import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as MazfrenClient } from '../../../generated/mazfren';

@Injectable()
export class MazfrenPrismaService extends MazfrenClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}