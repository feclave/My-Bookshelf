import express from "express";
import books from "./booksRoutes.js";
import authors from "./authorsRoutes.js";

const routes = (app) => {
    app.use(express.json());

    app.route("/").get((req, res) => res.status(200).send("My Bookshelf Database"));

    app.use(books, authors);
};

export default routes;