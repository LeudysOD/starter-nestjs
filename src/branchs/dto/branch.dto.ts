import { ApiProperty } from "@nestjs/swagger"

export class BranchDto{
    id:number
    branchName :string
    address: string
    email :  string 
    phoneNumber: string  
    latitude :  number
    longitude : number
}