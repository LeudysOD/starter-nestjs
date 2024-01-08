import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePreAlertDto } from './dto/create-pre-alert.dto';
import { UpdatePreAlertDto } from './dto/update-pre-alert.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PreAlert, Prisma } from '@prisma/client';
import { PreAlertFilters } from './filters/pre-alerts-filter';

@Injectable()
export class PreAlertsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.PreAlertUncheckedCreateInput) {
    try {
      await this.prisma.preAlert.create({ data: data });
    } catch (error) {}
  }

  async findAll(filter: PreAlertFilters): Promise<ApiResponse<PreAlert[]>> {
    var response: ApiResponse<PreAlert[]>;
    const result = await this.prisma.preAlert.findMany({
      where: {
        userId: filter.userId != undefined ? Number(filter.userId) : undefined,
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

    if (result != null) return (response = { data: result, success: true });

    throw new NotFoundException();
  }

  async findOne(id: number): Promise<ApiResponse<PreAlert>> {
    var response: ApiResponse<PreAlert>;
    const result = await this.prisma.preAlert.findUnique({ where: { id: id } });

    if (result != null) return (response = { data: result, success: true });

    throw new NotFoundException();
  }

  async findByFilter(
    filter: PreAlertFilters,
  ): Promise<ApiResponse<PreAlert[]>> {
    var response: ApiResponse<PreAlert[]>;
    const result = await this.prisma.preAlert.findMany({
      where: {
        userId: filter.userId != undefined ? Number(filter.userId) : undefined,
        createdAt: {
          lte:
            filter.startDate != undefined &&
            filter.startDate.toString() != '' &&
            filter.startDate != undefined &&
            filter.endDate.toString()
              ? new Date(filter.startDate)
              : undefined,
          gte:
            filter.startDate != undefined &&
            filter.startDate.toString() != '' &&
            filter.startDate != undefined &&
            filter.endDate.toString()
              ? new Date(filter.endDate)
              : undefined,
        },
      },
    });
    if (result != undefined)
      return (response = { data: result, success: true });

    throw new NotFoundException();
  }
}
