import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class PackageMovementsFilter {
  @ApiProperty({ type: Number })
  @ApiProperty({ required: true })
  packageId?: number;
}
