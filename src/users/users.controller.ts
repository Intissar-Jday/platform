import { Controller, Get, Post,Put, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto} from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}


  @Post('/add')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }


  @Get('/all')
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':username')
  async findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }


  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto:
  UpdateUserDto) {
  return await this.usersService.updateUser(+id, updateUserDto);
  }


}

