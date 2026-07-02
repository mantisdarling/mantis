import { Body, Controller, Post, HttpCode, HttpStatus, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role } from '@prisma/client';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

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

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    // Guard redirects
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    const jwt = req.user.access_token;
    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:3000'}/login?token=${jwt}`);
  }
}
