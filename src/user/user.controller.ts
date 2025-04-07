import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  createUser(@Body() body: Record<string, any>) {
    return { body };
  }
}
