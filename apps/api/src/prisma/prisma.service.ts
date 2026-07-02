import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      datasourceUrl: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/mantis?schema=public',
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
