import { ApiProperty } from "@nestjs/swagger"
import { Package } from "@prisma/client"

export class CreatePackageStatusDto {
    @ApiProperty()
    id:number
    @ApiProperty()
    description:string
}
