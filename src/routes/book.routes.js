import { Router } from "express";
import {
  getBooksCtrl,
  getBookByIdCtrl,
  createBookCtrl,
  updateBookCtrl,
  deleteBookCtrl,
  getBookByAnyWordCtrl,
  getBookByTitleCtrl,
  getBookByGenereCtrl,
} from "../controllers/book.controller.js";
import { bookSchema } from "../validations/abSchema.js";
import { validate } from "../middlewares/validation.js";

const router = Router();

router.get("/", getBooksCtrl);
router.get("/:id", getBookByIdCtrl);
router.get("/search/:anyword", getBookByAnyWordCtrl);
router.get("/title/:title", getBookByTitleCtrl);
router.get("/genere/:genere", getBookByGenereCtrl);
router.post("/", bookSchema, validate, createBookCtrl);
router.put("/:id", bookSchema, validate, updateBookCtrl);
router.delete("/:id", deleteBookCtrl);

export { router as bookRoutes };
