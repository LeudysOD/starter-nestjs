import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { Package as PackageDto } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { query } from 'express';
import { PackageFilters } from './filters/package.filters';

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

  @Post()
  create(
    @Body() createPackageDto: CreatePackageDto,
  ): Promise<ApiResponse<PackageDto>> {
    return this.packagesService.create(createPackageDto);
  }

  @UseGuards(AuthGuard)
  @Get('getLastPendingPackage')
  findPendingPackageByUser(
    @Query() query: any,
  ): Promise<ApiResponse<PackageDto>> {
    return this.packagesService.findPendingPackageByUser(query.userId);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAllByUser(
    @Query() query: PackageFilters,
  ): Promise<ApiResponse<PackageDto[]>> {
    return this.packagesService.findByFilter(query);
  }
}
