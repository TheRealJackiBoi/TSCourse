import "dotenv/config";
import mongoose from "mongoose";
import AuthorModel from "./model/AuthorModel";
import BookModel from "./model/BookModel";
import { Genres } from "./types/types";
import LibraryModel from "./model/LibraryModel";
import { addBookToLibrary } from "./controller/libraryController";
import { addBookToAuthor } from "./controller/authorController";
import { ObjectId } from "mongodb";

const uri: string = process.env.CONNECTION_URL!;

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

  const author = await AuthorModel.find({name: "Jack"}).exec()

    console.log(author)

  /*const book = await BookModel.create({
        title: "Lord of the Rings: 1",
        author: undefined,
        pages: 300,
        genre: Genres.FANTASY
    })

    console.log(book)*/

  /*console.log( await LibraryModel.create({
        name: "Jack's library"
    }))*/


  //console.log( await addBookToAuthor(new ObjectId('65d76a01a02037cf6dbd856e'), new ObjectId("65d7745c69f8490bfba61a00")))

  //console.log( await addBookToLibrary(new ObjectId('65d76c22f01aef451b3d8ac0'), new ObjectId("65d7699febb38d87b9c330b6")))

};

main();
