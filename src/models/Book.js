import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  autor: {
    type: Schema.Types.ObjectId,
    ref: "Autor",
  },
  editorial: {
    type: String,
    required: true,
  },
  publicationdate: {
    type: Date,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  genere: {
    type: String,
    required: true,
  },
});

export const Book = model("Book", bookSchema);
