import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PackageMovementsService } from './package-movements.service';
import { CreatePackageMovementDto } from './dto/create-package-movement.dto';
import { PackageMovement as PackageMovementDto } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('package-movements')
export class PackageMovementsController {
  constructor(private readonly packageMovementsService: PackageMovementsService) {}

  @Post()
  create(@Body() createPackageMovementDto: CreatePackageMovementDto) {
    return this.packageMovementsService.create(createPackageMovementDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll():Promise<ApiResponse<PackageMovementDto[]>> {
    return await this.packageMovementsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string):Promise<ApiResponse<PackageMovementDto>> {
    return await this.packageMovementsService.findOne(+id);
  }

}
