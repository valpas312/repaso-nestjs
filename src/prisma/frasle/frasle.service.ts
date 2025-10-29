import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as FrasleClient } from '../../generated/frasle';

@Injectable()
export class FraslePrismaService extends FrasleClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    console.log('✅ Conectado a la base FRASLE');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('🔌 Desconectado de la base FRASLE');
  }
}