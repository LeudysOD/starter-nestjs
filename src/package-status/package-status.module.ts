import { Module } from '@nestjs/common';
import { PackageStatusService } from './package-status.service';
import { PackageStatusController } from './package-status.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PackageStatusController],
  providers: [PackageStatusService,PrismaService],
})
export class PackageStatusModule {}
