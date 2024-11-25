import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/auth/dto/createUser.dto';
import { User, UserDocument } from 'src/user/models/User.model';
import * as bcrypt from 'bcrypt';
import { MailerService } from '@nestjs-modules/mailer';
import { MailDto } from './dto/mailService.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly mailService: MailerService,
  ) {}

  async findUserByUsername(username: string): Promise<UserDocument> {
    try {
      return await this.userModel.findOne({ username });
    } catch (error) {
      throw error;
    }
  }

  async findUserByEmail(email: string): Promise<UserDocument> {
    try {
      return await this.userModel.findOne({ email });
    } catch (error) {
      throw error;
    }
  }

  async findUserByUsernameOrEmail(login: string): Promise<UserDocument> {
    try {
      return await this.userModel.findOne({
        $or: [{ username: login }, { email: login }],
      });
    } catch (error) {
      throw error;
    }
  }

  async createUser(userInfo: CreateUserDto): Promise<UserDocument> {
    const { username, email, password } = userInfo;
    const hashedPassword: String = await bcrypt.hash(String(password), 10);
    const newUser = new this.userModel({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return newUser;
  }

  async sendMessage(info: MailDto) {
    await this.mailService.sendMail({
      to: String(info.to),
      subject: String(info.subject),
      template: String(info.tempalte),
      context: Object(info.context),
    });
  }
}
