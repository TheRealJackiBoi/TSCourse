import mongoose, { Schema } from "mongoose";
import { Library } from "../types/types";


const LibrarySchema = new mongoose.Schema<Library>({
  name: {
    type: String,
    required: true
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: "book"
  }],
  createdAt: Date
})

LibrarySchema.pre('save', function(next) {
  this.createdAt = new Date()
  next()
})

const LibraryModel = mongoose.model("library", LibrarySchema)
export default LibraryModel