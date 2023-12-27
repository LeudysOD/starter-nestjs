import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class PackageFilters {
  @ApiProperty({ type: Number })
  @IsNumber()
  userId?: number;
  @ApiProperty({ required: false })
  packageStatusId?: number;
  @ApiProperty({ required: false })
  @IsOptional()
  startDate?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  endDate?: string;
}
