import { ApiProperty } from "@nestjs/swagger"

export class CreateBranchDto {
    @ApiProperty()
    id:number
    @ApiProperty()
    branchName :string
    @ApiProperty()
    address: string
    @ApiProperty()
    email :  string 
    @ApiProperty()
    phoneNumber: string  
    @ApiProperty()
    latitude :  number
    @ApiProperty()
    longitude : number
}
