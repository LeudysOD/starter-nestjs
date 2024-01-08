import { Injectable, NotFoundException } from '@nestjs/common';
import { PackageMovement, Prisma } from '@prisma/client';
import { filter } from 'rxjs';
import { PackageFilters } from 'src/packages/filters/package.filters';
import { PrismaService } from 'src/prisma/prisma.service';
import { PackageMovementsFilter } from './filters/package-movements-filter';

@Injectable()
export class PackageMovementsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.PackageMovementUncheckedCreateInput) {
    return await this.prisma.packageMovement.create({ data });
  }

  async findAll(
    filter: PackageMovementsFilter,
  ): Promise<ApiResponse<PackageMovement[]>> {
    var response: ApiResponse<PackageMovement[]>;
    const result = await this.prisma.packageMovement.findMany({
      where: {
        packageId: Number(filter.packageId),
      },
      orderBy: { statusId: 'asc' },
    });

    if (result != null) return (response = { data: result, success: true });

    throw new NotFoundException();
  }

  async findOne(id: number): Promise<ApiResponse<PackageMovement>> {
    var response: ApiResponse<PackageMovement>;

    const result = await this.prisma.packageMovement.findUnique({
      where: { id: id },
    });
    if (result != null) return (response = { data: result, success: true });

    throw new NotFoundException();
  }
}
