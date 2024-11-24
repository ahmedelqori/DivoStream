import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: String;
  @Prop({ required: true, unique: true })
  email: String;
  @Prop({ required: true, minlength: 8 })
  password: String;
  @Prop({ default: false, required: false })
  isEmailVerified: Boolean;
  @Prop({ default: null })
  tokenEmailValidation: String;
}

export const UserSchema = SchemaFactory.createForClass(User);
