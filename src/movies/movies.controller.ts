import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies.';
  }

  @Get('/:id')
  getOne(@Param('id') movieID: string) {
    return `This will return one movie with the id ${movieID}`;
  }

  @Post()
  create() {
    return 'This will create a movie.';
  }
  @Delete('/:id')
  delete(@Param('id') movieID: string) {
    return `This will delete a movie with the id: ${movieID}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieID: string) {
    return `This will patch a movie with the id ${movieID}`;
  }
}

// 1. nestjs에서 무언가가 필요하면 내가 요청해야만해.
// 2. parameter decorator(@Param('id'))를 사용하면 nestjs는 내가 url에 있는 id parameter를 원하는 걸 안다.
// 3. @Put 은 모든 리소스를 업데이트해. @Patch는 리소스의 일부분만 업데이트
