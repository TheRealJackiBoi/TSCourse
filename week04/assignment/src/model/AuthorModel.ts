import mongoose, { Document, Schema } from "mongoose"
import { Author } from "../types/types"
import { Book } from "../types/types"


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
    ref: 'book'
  }],
  bookCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date
  }}, { virtuals: {
          nameAge: { 
            get() {
              return this.name + " " + this.age
            }
          }
  }})



AuthorSchema.pre('save', function(next) {
  this.createdAt = new Date()
  next()
})

AuthorSchema.pre('save', function(next) {
  (this as any).bookCount = (this as any).books.length
  next()
})

AuthorSchema.pre(/^find/, function(next) {
  (this as any).populate({
    path: 'books',
    select: '-__v'
  })
  next()
})

AuthorSchema.post('save', async function(doc, next) {
  await doc.populate({
    path:'books',
    select: '-__v'
  })
  next()
})

AuthorSchema.static('moreThanTwoBooks', function() {
  return this.find({bookCount: {$gte: 2}})
})


//export const AuthorModel = mongoose.model('author', AuthorSchema)

export default AuthorSchema