import { Injectable, NotFoundException } from '@nestjs/common';
import { PackageMovement, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PackageMovementsService {
  constructor(private readonly prisma:PrismaService){}

  async create(data: Prisma.PackageMovementUncheckedCreateInput) {
    return await this.prisma.packageMovement.create({data})
  }

  async findAll() :Promise<ApiResponse<PackageMovement[]>> {

    var response :ApiResponse<PackageMovement[]>;
    const result = await  this.prisma.packageMovement.findMany()

    if(result!=null) return response = {data:result, success:true}
    
    throw new NotFoundException();
  }

 async findOne(id: number):Promise<ApiResponse<PackageMovement>> {
    var response: ApiResponse<PackageMovement>;

    const result = await this.prisma.packageMovement.findUnique({where:{id : id}});
    if(result!= null) return response = {data:result,success:true}

    throw new NotFoundException();
  }
}
