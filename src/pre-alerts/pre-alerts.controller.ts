import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { PreAlertsService } from './pre-alerts.service';
import { CreatePreAlertDto } from './dto/create-pre-alert.dto';
import { PreAlert as PreAlertDto } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { PreAlertFilters } from './filters/pre-alerts-filter';

@UseGuards(AuthGuard)
@Controller('pre-alerts')
export class PreAlertsController {
  constructor(private readonly preAlertsService: PreAlertsService) {}

  @Post()
  create(@Body() createPreAlertDto: CreatePreAlertDto) {
    this.preAlertsService.create(createPreAlertDto);
  }

  @Get()
  async findAll(
    @Query() filter: PreAlertFilters,
  ): Promise<ApiResponse<PreAlertDto[]>> {
    return await this.preAlertsService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ApiResponse<PreAlertDto>> {
    return this.preAlertsService.findOne(+id);
  }
}
