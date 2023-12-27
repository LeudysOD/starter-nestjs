import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PackagesModule } from './packages/packages.module';
import { PackageStatusModule } from './package-status/package-status.module';
import { BranchsModule } from './branchs/branchs.module';
import { PreAlertsModule } from './pre-alerts/pre-alerts.module';
import { PackageMovementsModule } from './package-movements/package-movements.module';


@Module({
  imports: [PrismaModule, UsersModule, AuthModule, PackagesModule, PackageStatusModule, BranchsModule, PreAlertsModule, PackageMovementsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
