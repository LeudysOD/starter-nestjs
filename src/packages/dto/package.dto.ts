import { User } from "@prisma/client"
import { UserDto } from "src/users/dto/user.dto"
import { PackageStatusDto } from "./package-status.dto"
import { PackageMovementDto } from "./package-movements.dto"


export class PackageDto{
  id:number      
  trackingNumber :string   
  description: string
  weight: number
  CreatedAt : Date 
  courierFeed :number
  origin:string            
  destination:string                   
  userId:number   
  packageStatusId: number
}