const express = require("express");
const moviesRouter = express.Router();
const { getAllMovies, getMovieById, getMovieByTitle, getMovieByGenre, getMovie2010 } = require("../controller/movies.controller");

moviesRouter.get("/", getAllMovies);
moviesRouter.get("/:id", getMovieById);
moviesRouter.get("/title/:title", getMovieByTitle);
moviesRouter.get("/genre/:genre", getMovieByGenre);
moviesRouter.get("/year/2010", getMovie2010);

module.exports = moviesRouter;