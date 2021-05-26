import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  // 이 생성자 덕북엔 this.moviesService.getAll() 쓸 수 있다.
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   return `We are searching for a movie made after: ${searchingYear}`;
  // }

  // Search 부분이 @Get('/:id') 보다 밑에 위치하면 nestjs는 search를 id로 판단. -> 문제가됨

  @Get('/:id')
  getOne(@Param('id') movieID: string): Movie {
    return this.moviesService.getOne(movieID);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }
  @Delete('/:id')
  remove(@Param('id') movieID: string) {
    return this.moviesService.deleteOne(movieID);
  }

  @Patch('/:id')
  patch(@Param('id') movieID: string, @Body() updateData) {
    return this.moviesService.update(movieID, updateData);
  }
}

// 1. nestjs에서 무언가가 필요하면 내가 요청해야만해.
// 2. parameter decorator(@Param('id'))를 사용하면 nestjs는 내가 url에 있는 id parameter를 원하는 걸 안다.
// 3. @Put 은 모든 리소스를 업데이트해. @Patch는 리소스의 일부분만 업데이트
// 4. @Body 데코레이터는 movieData안의 리퀘스트의 body를 가져오기 위해 쓴거야.
// 5. 다시한번 강조. 필요한 parameter를 직접 요청.

// *** Single-responsibility principle
// 하나의 module, class 혹은 function이 하나의 기능은 꼭 책임져야 한다는 것.

// To do next
// updateData 유효성 검사
