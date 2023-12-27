import { Module } from '@nestjs/common';
import { BranchsService } from './branchs.service';
import { BranchsController } from './branchs.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [BranchsController],
  providers: [BranchsService, PrismaService],
})
export class BranchsModule {}
