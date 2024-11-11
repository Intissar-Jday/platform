import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/schemas/user.shema';

export type CompanyDocument = Company& Document;

@Schema()
export class Company extends User {
  @Prop()
  domain: string;

  @Prop()
  adress: string;
}

export const CandidateSchema = SchemaFactory.createForClass(Company);