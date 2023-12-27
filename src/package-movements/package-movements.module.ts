import { Module } from '@nestjs/common';
import { PackageMovementsService } from './package-movements.service';
import { PackageMovementsController } from './package-movements.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PackageMovementsController],
  providers: [PackageMovementsService,PrismaService],
})
export class PackageMovementsModule {}
