import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/books", BookController.getBooks);
routes.get("/books/:id", BookController.getBookById);
routes.post("/books", BookController.postBook);
routes.patch("/books/:id", BookController.patchBook);
routes.delete("/books/:id", BookController.deleteBook);

export default routes;