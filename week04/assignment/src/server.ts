import "dotenv/config";
import mongoose from "mongoose";
//import { BookModel } from "./model/BookModel";
//import { AuthorModel } from "./model/AuthorModel";
//import { LibraryModel } from "./model/LibraryModel";
import { Genres } from "./types/types";
import { addBookToLibrary } from "./controller/libraryController";
import { addBookToAuthor } from "./controller/authorController";
import { ObjectId } from "mongodb";
import AuthorSchema from "./model/AuthorModel";
import BookSchema from "./model/BookModel";
import LibrarySchema from "./model/LibraryModel";

const uri: string = process.env.CONNECTION_URL!;

export const AuthorModel = mongoose.model("author", AuthorSchema)
export const BookModel = mongoose.model("book", BookSchema)
export const LibraryModel = mongoose.model("library", LibrarySchema)

const main = async () => {
  await mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log("Error connecting to database", error);
    });

  /*await AuthorModel.create({
        name: "Jack",
        age: 21,
        books: [],
    })*/


  /*const book = await BookModel.create({
        title: "Lord of the Rings: 1",
        author: undefined,
        pages: -1,
        genre: Genres.FANTASY
    })

    console.log(book)*/

  /*console.log( await LibraryModel.create({
        name: "Jack's library"
    }))*/


  //console.log( await addBookToAuthor(new ObjectId('65d76a01a02037cf6dbd856e'), new ObjectId("65d7745c69f8490bfba61a00")))

  //console.log( await addBookToLibrary(new ObjectId('65d76c22f01aef451b3d8ac0'), new ObjectId("65d7699febb38d87b9c330b6")))

  /*const book = await BookModel.create({
    title: "Harry Potter and the Philosopher's Stone",
    author: undefined,
    pages: 223,
    genre: Genres.FANTASY,
  });*/

 /*const author = await AuthorModel.create({
    name: "J. K. Rowling",
    age: 55,
    books: [new ObjectId("65d79c50b88382a1ae529c1d")],
  })
  console.log(author)*/
  const author = await AuthorModel.findOne({name: "J. K. Rowling"}).select('-__v')

  console.log(author)

  console.log(await AuthorModel.moreThanTwoBooks())
  console.log(author.nameAge)
};

main();
