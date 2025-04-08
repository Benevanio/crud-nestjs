import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdarePutUserDto } from './dto/update-put-user.dto';

@Controller('users')
export class UserController {
  @Post()
  createUser(@Body() { name, email, password }: CreateUserDto) {
    return { name, email, password };
  }
  @Get()
  getUser(@Body() body: Record<string, any>) {
    return { body };
  }
  @Get(':id')
  getUserById(@Param(':id') id: string) {
    return { id };
  }
  @Put(':id')
  updateUser(
    @Param(':id') id: string,
    @Body() { name, email, password }: UpdarePutUserDto,
  ) {
    return { id, name, email, password };
  }
  @Patch(':id')
  updateUserById(@Param(':id') id: string, @Body() body: Record<string, any>) {
    return { id, body };
  }
  @Delete(':id')
  deteletUser(@Param(':id', ParseIntPipe) id: string) {
    return { id };
  }
 
}
