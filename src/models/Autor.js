import { Schema, model } from "mongoose";

const autorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  biography: {
    type: String,
    required: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

export const Autor = model("Autor", autorSchema);

//metodos

export const getAutors = async () => {
  try {
    const autors = await Autor.find().populate({
      path: "books",
      select: "title",
    });
    return autors;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAutorById = async (id) => {
  try {
    const autor = await Autor.findById(id).populate({
      path: "books",
      select: "title",
    });
    return autor;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createAutor = async (autor) => {
  try {
    const newAutor = await Autor.create(autor);
    return newAutor;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateAutor = async (id, autor) => {
  try {
    const updatedAutor = await Autor.findByIdAndUpdate(id, autor);
    return updatedAutor;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteAutor = async (id) => {
  try {
    const deletedAutor = await Autor.findByIdAndDelete(id);
    return deletedAutor;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addBookToAutor = async (id, book) => {
  try {
    const autor = await Autor.findById(id);
    autor.books.push(book);
    const updatedAutor = await autor.save();
    return updatedAutor;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteBookToAutor = async (id, book) => {
  try {
    const autor = await Autor.findById(book.autor).populate({
      path: "books",
      select: "title",
    });

    autor.books = autor.books.filter((item) => item._id.toHexString() !== id);
    return autor;
    // const updatedAutor = await autor.save();
    // return updatedAutor;
  } catch (error) {}
};
