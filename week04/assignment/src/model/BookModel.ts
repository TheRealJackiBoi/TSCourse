import mongoose, { Schema } from "mongoose";
import { Book, Genres } from "../types/types";

const BookSchema = new mongoose.Schema<Book>({
  title: {
    type: String,
    require: [true, "The book needs to have a title"]
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "author"    
  },
  pages: {
    type: Number,
    required: [true, "The book needs to have a number of pages"],
    min: [1, "The book needs to have at least one page, it got {VALUE} pages"]
  },
  genre: {
    type: String,
    enum: Genres,
    default: Genres.OTHER,
    required: true,
    message: "The genre needs to be of a valid genre or 'other', got {VALUE}"
  },
  createdAt: {
    type: Date
  }
})

BookSchema.pre('save', function(next) {
  this.createdAt = new Date()
  next()
})

// export const BookModel = mongoose.model('book', BookSchema) 
export default BookSchema