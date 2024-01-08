import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserDto } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { UpdatePicDto } from './dto/updatePicDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('getById')
  findOne(@Query('id') id: number) {
    return this.usersService.findById(id);
  }

  @Get('profilePic')
  async findByUserName(
    @Query('id') userId: number,
  ): Promise<ApiResponse<String>> {
    return await this.usersService.getProfilePic(userId);
  }

  @Put('profilePic')
  async updateProfilePic(
    @Query('id') userId: Number,
    @Body() updatePicDto: UpdatePicDto,
  ): Promise<ApiResponse<Boolean>> {
    return await this.usersService.updateProfilePic(
      userId,
      updatePicDto.profilePic,
    );
  }
}
