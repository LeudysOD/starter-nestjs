import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdatePicDto {
  @ApiProperty()
  @IsNotEmpty()
  profilePic: String;
}
