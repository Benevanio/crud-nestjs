import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  createUser(@Body() body: Record<string, any>) {
    return { body };
  }
  @Get()
  getUser(@Body() body: Record<string, any>) {
    return { body };
  }
}
