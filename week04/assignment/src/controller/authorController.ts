import { ObjectId } from "mongodb";
import BookModel from "../model/BookModel";
import { Author } from "../types/types";
import AuthorModel from "../model/AuthorModel";


export const addBookToAuthor = async (authorId: ObjectId, bookId: ObjectId): Promise<Author> => {

  const book = await BookModel.findById(bookId)

  if (!book) {
    throw new Error("Couldn't find book with id: " + bookId)
  }

  if (book.author) {
    throw new Error("Book already has an author")
  }

  const author = await AuthorModel.findById(authorId)

  if (!author) {
    throw new Error("Couldn't find author with id: " + authorId)
  }

  author.books.push(bookId)
  book.author = authorId

  await book.save()
  const savedAuthor = await author.save() 

  return savedAuthor
}