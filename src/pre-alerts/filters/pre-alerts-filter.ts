import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class PreAlertFilters {
  @ApiProperty({ type: Number })
  @IsNumber()
  userId?: number;
  @ApiProperty({ required: false })
  @IsOptional()
  startDate?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  endDate?: string;
}
