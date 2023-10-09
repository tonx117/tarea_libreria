import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBookByAnyWord,
  getBookByTitle,
  getBookByGenere,
} from "../helpers/methods.js";

export const getBooksCtrl = async (req, res) => {
  try {
    const books = await getBooks();
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const getBookByIdCtrl = async (req, res) => {
  try {
    const book = await getBookById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const createBookCtrl = async (req, res) => {
  try {
    const book = { ...req.body, cover: req.files.cover };
    const newBook = await createBook(book);
    res.status(201).json(newBook);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const updateBookCtrl = async (req, res) => {
  try {
    const book = await updateBook(req.params.id, req.body);
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const deleteBookCtrl = async (req, res) => {
  try {
    const book = await deleteBook(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const getBookByAnyWordCtrl = async (req, res) => {
  try {
    const books = await getBookByAnyWord(req.params.anyword);
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const getBookByTitleCtrl = async (req, res) => {
  try {
    const book = await getBookByTitle(req.params.title);
    res.status(200).json({ book });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const getBookByGenereCtrl = async (req, res) => {
  try {
    const books = await getBookByGenere(req.params.genere);
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
