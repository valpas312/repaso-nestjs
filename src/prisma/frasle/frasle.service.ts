import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as FrasleClient } from '../../../generated/frasle';

@Injectable()
export class FraslePrismaService extends FrasleClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}