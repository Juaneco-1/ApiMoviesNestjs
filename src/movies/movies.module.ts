import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MongooseModule } from '@nestjs/mongoose';
import { movieSchema } from './schemas/movie_schema';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  imports:[MongooseModule.forFeature([{name:'movie',schema:movieSchema}])]
})
export class MoviesModule {}
