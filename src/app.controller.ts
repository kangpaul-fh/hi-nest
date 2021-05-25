import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 데코레이터와 함수 사이에 빈공간을 두지않아.
  @Get('/hello')
  sayHello(): string {
    return 'hiya everyone';
  }
}
