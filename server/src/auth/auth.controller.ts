import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userInfo: CreateUserDto) {
    return this.authService.createUser(userInfo);
  }

  @Post('Login')
  async signIn(@Body() userInfo: LoginDto) {
    return this.authService.login(userInfo);
  }
}
