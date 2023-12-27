import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PackageStatusService } from './package-status.service';
import { CreatePackageStatusDto } from './dto/create-package-status.dto';
import { PackageStatus as PackageStatusDto } from '@prisma/client';
import { PackageMovementDto } from 'src/packages/dto/package-movements.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('package-status')
export class PackageStatusController {
  constructor(private readonly packageStatusService: PackageStatusService) {}

  @Post('create')
  create(@Body() createPackageStatusDto: CreatePackageStatusDto) {
    return this.packageStatusService.create(createPackageStatusDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll():Promise<ApiResponse<PackageMovementDto[]>> {
    return await this.packageStatusService.findAll();
  }
  
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string):Promise<ApiResponse<PackageMovementDto>> {
    return await this.packageStatusService.findOne(+id);
  }
}
