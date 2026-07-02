import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  register(@Body() signUpDto: Record<string, any>) {
    return this.authService.register(
      signUpDto.name,
      signUpDto.email,
      signUpDto.password,
      signUpDto.role as Role,
      signUpDto.timezone
    );
  }
}
