import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }
  @Post('login')
  async login(@Body() loginDto: LoginDto){
    return await  this.authService.login(loginDto)
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto){
    await this.authService.register(registerDto);
  }
}
