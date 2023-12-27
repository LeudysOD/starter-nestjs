import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BranchsService } from './branchs.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { Branch as BranchDto } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Controller('branchs')
export class BranchsController {
  constructor(private readonly branchsService: BranchsService) {}

  @Post()
  create(@Body() createBranchDto: UpdateBranchDto) {
    return this.branchsService.create(createBranchDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<ApiResponse<BranchDto[]>> {
    return await this.branchsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ApiResponse<BranchDto>> {
    return this.branchsService.findOne(+id);
  }
}
