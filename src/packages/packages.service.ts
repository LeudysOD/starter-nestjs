import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { Package, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PackageFilters } from './filters/package.filters';

@Injectable()
export class PackagesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: Prisma.PackageUncheckedCreateInput,
  ): Promise<ApiResponse<Package>> {
    const response: ApiResponse<Package> = {
      data: await this.prisma.package.create({ data }),
      success: true,
    };
    return response;
  }

  async findPendingPackageByUser(
    userId: number,
  ): Promise<ApiResponse<Package>> {
    var response: ApiResponse<Package>;
    const result = await this.prisma.package.findFirstOrThrow({
      where: {
        userId: userId != undefined ? Number(4) : undefined,
        packageStatusId: 0,
      },
    });

    if (result != undefined)
      return (response = { data: result, success: true });

    throw new NotFoundException();
  }

  async findByFilter(filter: PackageFilters): Promise<ApiResponse<Package[]>> {
    var response: ApiResponse<Package[]>;
    const result = await this.prisma.package.findMany({
      where: {
        userId: filter.userId != undefined ? Number(filter.userId) : undefined,
        packageStatusId:
          filter.packageStatusId != undefined
            ? Number(filter.packageStatusId)
            : undefined,
        createdAt: {
          lte:
            filter.endDate != undefined &&
            filter.endDate != null &&
            filter.endDate != ''
              ? new Date(filter.endDate)
              : undefined,
          gte:
            filter.startDate != undefined &&
            filter.startDate != null &&
            filter.endDate != ''
              ? new Date(filter.startDate)
              : undefined,
        },
      },
    });
    if (result != undefined)
      return (response = { data: result, success: true });

    throw new NotFoundException();
  }
}
