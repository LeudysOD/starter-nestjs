import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PackageStatus, Prisma } from '@prisma/client';

@Injectable()
export class PackageStatusService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.PackageStatusCreateInput) {
    return this.prisma.packageStatus.create({ data });
  }

  async findAll(): Promise<ApiResponse<PackageStatus[]>> {
    var response: ApiResponse<PackageStatus[]>;
    const result = await this.prisma.packageStatus.findMany();

    if (result != null) return (response = { data: result, success: true });

    throw new NotFoundException();
  }

  async findOne(id: number): Promise<ApiResponse<PackageStatus>> {
    var response: ApiResponse<PackageStatus>;

    const result = await this.prisma.packageStatus.findUnique({
      where: { id: id },
    });
    if (result != null) return (response = { data: result, success: true });

    throw new NotFoundException();
  }

  async delete(id: number): Promise<ApiResponse<PackageStatus>> {
    var response: ApiResponse<PackageStatus>;

    const result = await this.prisma.packageStatus.delete({
      where: { id: id },
    });
    if (result != null) return (response = { data: result, success: true });

    throw new NotFoundException();
  }
}
