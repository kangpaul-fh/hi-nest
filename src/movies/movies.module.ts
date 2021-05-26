import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

// 여기 provider에 MovieService를 두면 nestjs가 Controller에게 MovieService를 주입할거야.
@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
