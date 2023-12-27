import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { env } from 'process';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private readonly jwtService:JwtService){}
  
  async canActivate(context: ExecutionContext):  Promise<boolean>  {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if(!token) throw new UnauthorizedException();

  try {
    const payload = await this.jwtService.verifyAsync(token, {secret: "86bc83b4dfbe3ac142588ca051180efd6eaf51735f17c41a0469c963c64aa5f1"});
    request.user = payload;
  }

   catch (error) {
    throw new UnauthorizedException();
  }
  
    return true;
  }
  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
  
}
