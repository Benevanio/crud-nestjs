import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser(): string {
    return 'User created';
  }
}
