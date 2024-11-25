import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { MailDto } from 'src/user/dto/mailService.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(userInfo: CreateUserDto) {
    try {
      const { username, email, password } = userInfo;

      const findUser = await this.usersService.findUserByUsername(
        String(username),
      );
      if (findUser)
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: 'This username already used',
          },
          HttpStatus.CONFLICT,
        );
      const findEmail = await this.usersService.findUserByEmail(String(email));
      if (findEmail)
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: 'This email already used',
          },
          HttpStatus.CONFLICT,
        );

      const newUser = await this.usersService.createUser(userInfo);
      const payload = { id: newUser._id, username };
      return this.signToken(payload);
    } catch (error) {
      throw error;
    }
  }

  async login(userInfo: LoginDto) {
    try {
      const { usernameEmail: login, password } = userInfo;

      const findUser = await this.usersService.findUserByUsernameOrEmail(
        String(login),
      );

      if (!findUser)
        throw new HttpException(
          {
            status: HttpStatus.UNAUTHORIZED,
            error: 'this user not exist',
          },
          HttpStatus.UNAUTHORIZED,
        );

      const comparePassword: Boolean = await bcrypt.compare(
        String(password),
        String(findUser.password),
      );
      if (comparePassword == false) {
        throw new HttpException(
          {
            status: HttpStatus.UNAUTHORIZED,
            error: 'password incorrect',
          },
          HttpStatus.UNAUTHORIZED,
        );
      }
      const payload = { id: findUser._id, username: findUser.username };
      return this.signToken(payload);
    } catch (error) {
      throw error;
    }
  }

  private async signToken(payload: any) {
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_TOKEN,
    });
    return accessToken;
  }

  async validateWithEmail(email: string) {
    const info: MailDto = {
      to: email,
      subject: 'Validate Your Account',
      tempalte: 'verification-email',
      context: {
        name: 'Meedivo',
        code: 1234,
      },
    };
    await this.usersService.sendMessage(info);
  }

  

  async validateWithSMS(phonenumber: string) {}
}
