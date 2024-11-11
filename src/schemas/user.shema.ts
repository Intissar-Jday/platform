import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
  
  @Prop()
  profilePicture: string; 

  @Prop({ required: true, enum: ['Candidate', 'Trainer', 'Admin', 'company'] })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
