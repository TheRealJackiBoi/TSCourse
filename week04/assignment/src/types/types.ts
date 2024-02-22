import { ObjectId } from "mongodb"


export enum Genres  {
  FICTION = 'fiction', 
 NON_FICTION = 'non-fiction', 
  FANTASY = 'fantasy', 
  MYSTERY = 'mystery', 
  THRILLER = 'thriller', 
  ROMANCE = 'romance', 
  BIOGRAPHY = 'biography', 
  HISTORY = 'history', 
  SCIENCE = 'science', 
  OTHER = 'other'
}

export interface Book {
  _id?: ObjectId,
  title: string,
  author: ObjectId | Author,
  pages: number,
  genre: Genres,
  createdAt?: Date
}

export interface Author {
  _id?: ObjectId,
  name: {
    first: string,
    last: string
  },
  age: number,
  books: [ObjectId| Book],
  bookCount: number,
  createdAt?: Date
}

export interface Library {
  _id?: ObjectId,
  name: String,
  books: [ObjectId | Book],
  bookCount: number,
  createdAt: Date
}