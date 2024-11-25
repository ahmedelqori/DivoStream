import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guards/auth.guards';
import { Request } from 'express';

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
  @UseGuards(AuthGuard)
  @Get('Protected')
  async protect() {
    return 'Welcome';
  }

  @UseGuards(AuthGuard)
  @Post('/verification')
  async verification(@Query('method') method: string, @Req() request: Request) {
    console.log(request['user']);
    if (method === 'email')
      return this.authService.validateWithEmail('meedivo@gmail.com');
    if (method === 'sms') return this.authService.validateWithSMS('');
  }
}
