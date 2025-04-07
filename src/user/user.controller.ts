import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getUser(): string {
    return 'User data';
  }

  @Post()
  createUser(): string {
    return 'User created';
  }
}
