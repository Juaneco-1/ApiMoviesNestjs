import { Controller, Get, Put,Post ,Delete, Body,Param} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './interfaces/movie';
import { MovieDto } from './dto/movie.dto';
@Controller('movies')
export class MoviesController {


    constructor(private movieService:MoviesService){

    }
    @Get()
    getMovies(){
        return this.movieService.getMovies();
    }
    @Get(':idMovie')
    getMovie(@Param ('idMovie') idMovie:string){
        return this.movieService.getMovie(idMovie);
    }

    @Post()
    createMovie(@Body () movie:MovieDto):Promise<Movie>{
        return this.movieService.createMovie(movie);
    }

    @Put(':id')
    updateMovie(@Body () movie:MovieDto,@Param ('id') id:string){
        return this.movieService.updateMovie(movie,id);
    }
    
    @Delete(':id')
     deleteMovie(@Param ('id') id:string){
        return this.movieService.deleteMovie(id);
     }





}
