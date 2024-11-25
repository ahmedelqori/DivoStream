import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { User } from 'src/models/User.model';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(userInfo: CreateUserDto) {
    try {
      const { username, email, password } = userInfo;

      const findUser = await this.userModel.findOne({ username });
      if (findUser)
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: 'This username already used',
          },
          HttpStatus.CONFLICT,
        );
      const findEmail = await this.userModel.findOne({ email });
      if (findEmail)
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: 'This email already used',
          },
          HttpStatus.CONFLICT,
        );

      const hashedPassword: String = await bcrypt.hash(String(password), 10);

      const newUser = new this.userModel({
        username,
        email,
        password: hashedPassword,
      });
      await newUser.save();

      const payload = { id: newUser._id, username };
      return this.signToken(payload);
    } catch (error) {
      throw error;
    }
  }

  async login(userInfo: LoginDto) {
    try {
      const { usernameEmail, password } = userInfo;

      const findUser = await this.userModel.findOne({
        $or: [{ username: usernameEmail }, { email: usernameEmail }],
      });

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
}
