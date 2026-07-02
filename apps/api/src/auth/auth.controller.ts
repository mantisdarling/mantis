import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role } from '@prisma/client';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register a new user (Mentee or Expert)' })
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
