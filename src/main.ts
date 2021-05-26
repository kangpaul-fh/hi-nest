import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

// 일반적으로 파이프는 미들웨어 같은 것.
// ValidationPipe 유효성 검사를 해줌.

// 예시를 보자

/* ---------------------------------------------------------------

1. whitelist: true
클라이언트 측에서 전송한 데이터가 다음과 같을 경우
{
　 "title": "Tenet",
　 "year": 2020,
　 "genres": ["Action", "Sci-Fi"],
　 "hack": "by me"
}

whitelist: true 로 설정했을 때 아래와 같이 데코레이터가 없는 속성("hack")은 제거되어 저장됩니다.
{
　 id: 1,
　 title: 'Tenet',
　 year: 2020,
　 genres: ['Action', 'Sci-Fi'],
}


2. forbidNonWhitelisted: true
클라이언트 측에서 전송한 데이터가 다음과 같을 경우
{
　 "title": "Tenet",
　 "year": 2020,
　 "genres": ["Action", "Sci-Fi"],
　 "hack": "by me"
}

"hack"이라는 속성은 화이트리스트에 존재하지 않으므로 HttpException 을 던집니다.

response :
{
　 "statusCode": 400,
　 "message": [ "property hack should not exist" ],
　 "error": "Bad Request"
}
---------------------------------------------------------------*/

// 추가 설명

/* forbidNonWhitelisted 옵션은 whitelist에서 유효한 속성이 아닌 것을 제외하는 것 대신에 에러를 날려주는 것이기 때문에, 먼저 whitelist 옵션이 true로 되어있어야 사용 가능한 옵션입니다. */

// transform: true,
// 유저가 보낸 type을 우리가 원하는 실제 타입으로 변환? 그것도 자동으로.
