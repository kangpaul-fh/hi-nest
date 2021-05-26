import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies.';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }
  // Search 부분이 @Get('/:id') 보다 밑에 위치하면 nestjs는 search를 id로 판단. -> 문제가됨

  @Get('/:id')
  getOne(@Param('id') movieID: string) {
    return `This will return one movie with the id ${movieID}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }
  @Delete('/:id')
  delete(@Param('id') movieID: string) {
    return `This will delete a movie with the id: ${movieID}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieID: string, @Body() updateData) {
    return {
      updatedMovie: movieID,
      ...updateData,
    };
  }
}

// 1. nestjs에서 무언가가 필요하면 내가 요청해야만해.
// 2. parameter decorator(@Param('id'))를 사용하면 nestjs는 내가 url에 있는 id parameter를 원하는 걸 안다.
// 3. @Put 은 모든 리소스를 업데이트해. @Patch는 리소스의 일부분만 업데이트
// 4. @Body 데코레이터는 movieData안의 리퀘스트의 body를 가져오기 위해 쓴거야.
// 5. 다시한번 강조. 필요한 parameter를 직접 요청.
