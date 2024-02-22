import mongoose, { Document, Schema } from "mongoose"
import { Author } from "../types/types"


const AuthorSchema = new mongoose.Schema<Author>({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: "book"
  }],
  createdAt: {
    type: Date
  }
})

AuthorSchema.pre('save', function(next) {
  this.createdAt = new Date()
  next()
})

AuthorSchema.post('save', async function(doc, next) {
  await doc.populate('books')
  next()
})

AuthorSchema.pre(/^find/, function(next) {
  (this as any).populate({
    path: 'books'
  })
  next()
})

const AuthorModel = mongoose.model('author', AuthorSchema)

export default AuthorModel