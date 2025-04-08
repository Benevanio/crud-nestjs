import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
} from '@nestjs/common';

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
  @Get(':id')
  getUserById(@Param(':id') id: string) {
    return { id };
  }
  @Put(':id')
  updateUser(@Param(':id') id: string, @Body() body: Record<string, any>) {
    return { id, body };
  }

  @Patch(':id')
  updateUserById(@Param(':id') id: string, @Body() body: Record<string, any>) {
    return { id, body };
  }
  @Delete(':id')
  deleteUser(@Param(':id') id: string) {
    return { id };
  }
}
