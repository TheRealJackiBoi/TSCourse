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
  bookCount: {
    type: Number,
    default: 0
  },
  createdAt: Date
})

LibrarySchema.pre('save', function(next) {
  this.createdAt = new Date()
  next()
})
LibrarySchema.post('save', async function(doc, next) {
  await doc.populate({
    path:'books',
    select: '-__v'
  })
  next()
})

//export const LibraryModel = mongoose.model("library", LibrarySchema)
export default LibrarySchema
