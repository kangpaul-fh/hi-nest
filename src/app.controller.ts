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
    return this.appService.getHi();
  }
}

/*
  1. 컨트롤러는 그냥 url을 가져오는 역할일 뿐이야. 그리고 function return.
  2. 서비스는 실제로 function을 가지는 부분. 컨트롤러의 function들을 놓는 곳. 실제로 비즈니스 로직을 실행하는 역할
*/
