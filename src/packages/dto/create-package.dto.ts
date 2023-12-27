import { UserDto } from "src/users/dto/user.dto"
import { PackageStatusDto } from "./package-status.dto"
import { PackageMovementDto } from "./package-movements.dto"
import { Decimal } from "@prisma/client/runtime/library"
import { PackageStatus, User } from "@prisma/client"
import { ApiProperty } from "@nestjs/swagger"

export class CreatePackageDto {
  @ApiProperty()
  id:number      
  @ApiProperty()
  trackingNumber :string   
  @ApiProperty()
  description: string
  @ApiProperty()
  weight: number
  @ApiProperty()
  CreatedAt : Date 
  @ApiProperty()
  courierFeed :number
  @ApiProperty()
  origin:string            
  @ApiProperty()
  destination:string                
  @ApiProperty()
  userId:number  
  @ApiProperty()
  packageStatusId: number
}
