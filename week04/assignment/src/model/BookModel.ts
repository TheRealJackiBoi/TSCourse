import mongoose, { Schema } from "mongoose";
import { Book, Genres } from "../types/types";

const BookSchema = new mongoose.Schema<Book>({
  title: {
    type: String,
    require: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "author"    
  },
  pages: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    enum: Genres,
    default: Genres.OTHER,
    required: true,
    message: "The genre needs to be of a valid genre or 'other'"
  },
  createdAt: {
    type: Date
  }
})

BookSchema.pre('save', function(next) {
  this.createdAt = new Date()
  next()
})

const BookModel = mongoose.model("book", BookSchema) 
export default BookModel
