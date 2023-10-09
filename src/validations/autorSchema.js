import { checkSchema } from "express-validator";

export const autorSchema = checkSchema({
  name: {
    in: ["body"],
    notEmpty: true,
  },
  surname: {
    in: ["body"],
    notEmpty: true,
  },
  biography: {
    in: ["body"],
    notEmpty: true,
  },
});
