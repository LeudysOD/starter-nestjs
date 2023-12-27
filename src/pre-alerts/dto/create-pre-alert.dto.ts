import { ApiProperty } from '@nestjs/swagger';

export class CreatePreAlertDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  trackingNumber: string;
  @ApiProperty()
  supplierName: string;
  @ApiProperty()
  contentDescription: string;
  @ApiProperty()
  fob: number;
  @ApiProperty()
  receiptDocument: string;
  @ApiProperty()
  userId: number;
}
