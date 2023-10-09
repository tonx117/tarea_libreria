import { checkSchema } from "express-validator";

export const bookSchema = checkSchema({
  title: {
    in: ["body"],
    notEmpty: true,
  },
  editorial: {
    in: ["body"],
    notEmpty: true,
  },
  title: {
    in: ["body"],
    notEmpty: true,
  },
  autor: {
    in: ["body"],
    notEmpty: true,
  },
  publicationdate: {
    in: ["body"],
    notEmpty: true,
  },
  genere: {
    in: ["body"],
    notEmpty: true,
  },
});
