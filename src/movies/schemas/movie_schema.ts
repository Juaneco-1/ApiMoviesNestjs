import { Schema } from "mongoose";

export const movieSchema = new Schema({
    title:String,
    year:String,
    director:String,
    img:String,
});