import { ApiProperty } from "@nestjs/swagger"
import { Branch } from "./branch.dto"
import { IsNotEmpty } from "class-validator"

export class UserDto {
    @ApiProperty()
    @IsNotEmpty()
    id:number

    @ApiProperty()
    @IsNotEmpty()
    userName:string


    @ApiProperty()
    @IsNotEmpty()
    name:string

    @ApiProperty()
    @IsNotEmpty()
    lastName:string

    @ApiProperty()
    @IsNotEmpty()
    indentificationNumber:string

    @ApiProperty()
    @IsNotEmpty()
    email:string


    @ApiProperty()
    @IsNotEmpty()
    phoneNumber:string
   
    branch:Branch|null
    
    @ApiProperty()
    @IsNotEmpty()
    branchId:number
}
