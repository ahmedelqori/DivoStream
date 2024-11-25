import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class MailDto {
  @IsNotEmpty()
  @IsEmail()
  to: String;

  @IsNotEmpty()
  @MinLength(3)
  subject: String;

  @IsNotEmpty()
  tempalte: String;

  @IsOptional()
  context: Object;
}
