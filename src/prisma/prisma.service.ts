import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { env } from 'process';


@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url:  "postgresql://postgres:Vy0v67cdtR9WofkRF4QC@containers-us-west-150.railway.app:7176/railway",
        },
      },
    });
  }
}
