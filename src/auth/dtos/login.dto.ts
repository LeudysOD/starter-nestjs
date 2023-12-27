import { ApiProperty } from "@nestjs/swagger"

export class LoginDto{
    @ApiProperty({ example: 'LeudysOD' })
    userName:string

    @ApiProperty({ example: '26564' })
    password:string
}