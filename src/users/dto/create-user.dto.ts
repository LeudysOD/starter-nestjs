import { Branch } from "./branch.dto"

export class CreateUserDto {
    userName:string
    password:string
    name:string
    lastName:string
    indentificationNumber:string
    email:string
    phoneNumber:string
    branch:Branch|null
    branchId:number
}
