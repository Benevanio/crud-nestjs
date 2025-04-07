import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá Mundo!';
  }
  postHello(): string {
    return 'Olá Mundo!';
  }
}
