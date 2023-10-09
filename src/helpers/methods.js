import { addBookToAutor, deleteBookToAutor } from "./Autor.js";
import { uploadImageToCloudinary } from "./uploadImage.js";
import { Book } from "../models/Book.js";

export const getBooks = async () => {
  try {
    const books = await Book.find().populate({
      path: "autor",
      select: "name",
    });
    return books;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getBookById = async (id) => {
  try {
    const book = await Book.findById(id).populate({
      path: "autor",
      select: "name",
    });
    return book;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createBook = async (book) => {
  try {
    const { autor, cover } = book;
    const imageUrl = await uploadImageToCloudinary(cover);
    book.cover = imageUrl;
    const newBook = await Book.create(book);
    addBookToAutor(autor, newBook);
    return newBook;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateBook = async (id, book) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, book);
    return updatedBook;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteBook = async (id) => {
  try {
    const book = await Book.findById(id);
    await deleteBookToAutor(id, book);
    const deletedBook = await Book.findByIdAndDelete(id);
    return deletedBook;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getBookByTitle = async (title) => {
  try {
    const book = await Book.findOne({
      title: { $regex: new RegExp(title, "i") },
    }).populate({
      path: "autor",
      select: "name",
    });
    return book;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getBookByAnyWord = async (word) => {
  try {
    const request = {
      $or: [
        { title: { $regex: word, $options: "i" } },
        { editorial: { $regex: word, $options: "i" } },
        { genere: { $regex: word, $options: "i" } },
      ],
    };
    const books = await Book.find(request).populate({
      path: "autor",
      select: "name",
    });
    return books;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getBookByGenere = async (genere) => {
  try {
    const books = await Book.find({
      genere: { $regex: new RegExp(genere, "i") },
    }).populate({
      path: "autor",
      select: "name",
    });
    return books;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
