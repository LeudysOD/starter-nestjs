import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({
      data,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findById(id: number): Promise<ApiResponse<User>> {
    var response: ApiResponse<User>;
    var result = await this.prisma.user.findUnique({
      where: { id: Number(id) },
    });
    return (response = { data: result, success: true });
  }

  async findByUserName(userName: Prisma.UserWhereInput): Promise<User | null> {
    return await this.prisma.user.findFirst({
      where: userName,
    });
  }
  async getProfilePic(userId: Number): Promise<ApiResponse<String> | null> {
    var response: ApiResponse<String>;
    var user = await this.prisma.user.findFirst({
      where: {
        id: Number(userId),
      },
    });
    return (response = {
      data: user.profilePic.toString('base64'),
      success: true,
    });
  }
  async updateProfilePic(
    userId: Number,
    newProfilePic: String,
  ): Promise<ApiResponse<Boolean>> {
    const picBuffer = Buffer.from(newProfilePic, 'base64');
    var response: ApiResponse<Boolean>;
    await this.prisma.user.update({
      data: { profilePic: picBuffer },
      where: {
        id: Number(userId),
      },
    });
    return (response = { data: true, success: true });
  }
}
