import { Router } from "express";
import { autorSchema } from "../validations/abSchema.js";
import { validate } from "../middlewares/validation.js";
import {
  createAutorCtrl,
  deleteAutorCtrl,
  getAutorsCtrl,
  getAutorByIdCtrl,
  updateAutorCtrl,
} from "../controllers/autor.controller.js";
const router = Router();

router.get("/", getAutorsCtrl);
router.get("/:id", getAutorByIdCtrl);
router.post("/", autorSchema, validate, createAutorCtrl);
router.put("/:id", autorSchema, validate, updateAutorCtrl);
router.delete("/:id", deleteAutorCtrl);

export { router as autorRoutes };
