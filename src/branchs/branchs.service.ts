import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Branch, Prisma } from '@prisma/client';

@Injectable()
export class BranchsService {
  constructor(private readonly prisma:PrismaService){}

  create(data: Prisma.BranchCreateInput) {
    return this.prisma.branch.create({data})
  }

  async findAll():Promise<ApiResponse<Branch[]>> {
   var response:ApiResponse<Branch[]>;
   const result = await this.prisma.branch.findMany();
   if(result!=null) return response={data:result,success:true}

   throw new NotFoundException()
  }

  async findOne(id: number):Promise<ApiResponse<Branch>> {
    var response:ApiResponse<Branch>;
    const result=  await this.prisma.branch.findUnique({where:{id:id}})

    if(result!=null) return response = {data:result,success:true}
  }
}
