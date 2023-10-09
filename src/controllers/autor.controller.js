import {
  createAutor,
  getAutors,
  updateAutor,
  deleteAutor,
  getAutorById,
} from "../models/Autor.js";

export const getAutorsCtrl = async (_req, res) => {
  try {
    const autors = await getAutors();
    res.status(200).json(autors);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const getAutorByIdCtrl = async (req, res) => {
  try {
    const autor = await getAutorById(req.params.id);
    res.status(200).json(autor);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const createAutorCtrl = async (req, res) => {
  try {
    const autor = await createAutor(req.body);
    res.status(201).json(autor);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const updateAutorCtrl = async (req, res) => {
  try {
    await updateAutor(req.params.id, req.body);
    res.status(200).json({ msg: "Autor Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const deleteAutorCtrl = async (req, res) => {
  try {
    await deleteAutor(req.params.id);
    res.status(200).json({ msg: "Autor Eliminated" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
