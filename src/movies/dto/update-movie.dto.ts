import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  // @IsString()
  // readonly title?: string;
  // @IsNumber()
  // readonly year?: number;
  // @IsString({ each: true })
  // readonly genres?: string[];
}

// ? 필수값은 아니다.

// mapped-types는 타입을 변환시키고 사용할 수 있게 해줘.
// @nestjs/mapped-types
// PartialType(CreateMovieDto) 전부 필수항목이 아니라는 것 빼고는 같음.
