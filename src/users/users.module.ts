import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User,UserSchema } from 'src/schemas/user.shema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
