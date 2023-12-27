import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

import { env } from 'process';

@Module({
  imports:[UsersModule,
    JwtModule.register({
      global: true,
      secret: env.API_KEY,
      signOptions: { expiresIn: '60s' },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,UsersService,PrismaService,JwtService],
})
export class AuthModule {}
