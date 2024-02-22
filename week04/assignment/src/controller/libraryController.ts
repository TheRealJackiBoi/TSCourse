import { ObjectId } from "mongodb"
import BookModel from "../model/BookModel"
import LibraryModel from "../model/LibraryModel"
import { Library } from "../types/types"


export const addBookToLibrary = async (libraryId: ObjectId, bookId: ObjectId): Promise<Library> => {

  const book = await BookModel.findById(bookId)

  if (!book) {
    throw new Error("Couldn't find book with id: " + bookId)
  }

  const library = await LibraryModel.findById(libraryId)

  if (!library) {
    throw new Error("Couldn't find library with id: " + libraryId)
  }

  if (library.books.find(book => book._id!.toString() == bookId.toString())) {
    throw new Error("Library already contains: " + book.title)
  }

  library.books.push(bookId)

  const savedLibrary = await library.save() 

  return savedLibrary
}