import { Module } from '@nestjs/common';
import { PreAlertsService } from './pre-alerts.service';
import { PreAlertsController } from './pre-alerts.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PreAlertsController],
  providers: [PreAlertsService,PrismaService],
})
export class PreAlertsModule {}
