import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dtos/register.dto';
import { compare, hash } from 'bcrypt';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { env } from 'process';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtSevice: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const user = await this.userService.findByUserName({
      userName: registerDto.userName,
    });
    if (user != null) throw new BadRequestException('The user already exist');
    registerDto.password = await hash(registerDto.password, 10);

    await this.userService.create(registerDto);
  }

  async login(longinDto: LoginDto) {
    const user = await this.userService.findByUserName({
      userName: longinDto.userName,
    });
    if (user == null) throw new UnauthorizedException('Invalid credentials');

    var passwordIsValid = await compare(longinDto.password, user.password);
    if (!passwordIsValid)
      throw new UnauthorizedException('Invalid credentials');

    const payload = { username: user.userName, sub: user.id };
    const accessToken = await this.jwtSevice.signAsync(payload, {
      secret: env.API_KEY,
      expiresIn: '2h',
    });
    return { accessToken };
  }
}
