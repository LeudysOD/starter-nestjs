import { ApiProperty } from "@nestjs/swagger"
import { Branch } from "@prisma/client"

    export class RegisterDto {
        
       
        @ApiProperty({ example: 'LeudysOD' })
        userName:string
        @ApiProperty({ example: '151841511e' })
        password:string
        @ApiProperty({ example: 'Leudys' })
        name:string
        @ApiProperty({ example: 'Ogando' })
        lastName:string
        @ApiProperty({ example: '4026456987' })
        indentificationNumber:string
        @ApiProperty({ example: 'leudis3@hotmail.com' })
        email:string
        @ApiProperty({ example: '8493948316' })
        phoneNumber:string
        branch:any
        @ApiProperty({ example: 1 })
        branchId:number
    }
