import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.getAuthors);
routes.get("/authors/search", AuthorController.getAuthorByName);
routes.get("/authors/:id", AuthorController.getAuthorById);
routes.post("/authors", AuthorController.postAuthor);
routes.patch("/authors/:id", AuthorController.patchAuthor);
routes.delete("/authors/:id", AuthorController.deleteAuthor);

export default routes