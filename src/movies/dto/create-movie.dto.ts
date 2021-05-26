import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}

// DTO: Data Transfer Object
// movieData updateData엔 아직 타입이 없다.
// 타입을 지정해주기위해 dto가 필요?
// movies.controller 로 가서 타입 지정 ㄱㄱ

// DTO를 쓰는 이유?
// 1. 프로그래머로서 코드를 더 간결하게 만들 수 있도록해줌.
// 2. NestJS가 들어오는 query에 대해 유효성을 검사할 수 있게 해줌.

// @IsString({ each: true })
// 모든 요소를 하나씩 검사한다는거야.
