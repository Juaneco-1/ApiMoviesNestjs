import { Injectable } from '@nestjs/common';
import { Movie } from './interfaces/movie';
import { Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MovieDto } from './dto/movie.dto';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class MoviesService {

    constructor(@InjectModel ('movie') private movieModel:Model<Movie>){

    }

    async getMovies(){//Async porque va a tener que esperar
        return await this.movieModel.find();
    }

    async getMovie(id:string){
        
        return await this.movieModel.findById(id);
    }

    createMovie(movie:MovieDto){
            
        const newMovie=new this.movieModel(movie);
        
        return newMovie.save();
    }

    async updateMovie(data:MovieDto,id:string){

        console.log(id)
        console.log(data)
        const post = await this.movieModel
        .findByIdAndUpdate(id, data)
        
        .setOptions({ overwrite: true, new:true })
        if (!post) {
            throw new NotFoundException();
        }
        return post;
    }

    async deleteMovie(id:string){
        
        const remove=await this.movieModel.findByIdAndRemove(id)
        if(!remove){
            throw new NotFoundException();
        }
        return remove;

    }








}
