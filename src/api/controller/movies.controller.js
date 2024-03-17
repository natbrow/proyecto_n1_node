const Movie = require("../models/movies.models")


const getAllMovies = async (req, res) => {
    try {
        const allMovies = await Movie.find()
        return res.status(200).json({
            status: 200,
            message: "ok",
            data: allMovies
        })
    } catch (error) {
        return res.status(500).json(error)
    }
};
const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        return res.status(200).json({
            status: 200,
            message: "ok",
            data: movie
        })

    } catch (error) {
        return res.status(500).json(error)
    }
}
const getMovieByTitle = async (req, res) => {
    try {
        const title = req.params.title;
        const movie = await Movie.findOne({ title: title });
        if (movie) {
            res.status(200).json({
                status: 200,
                message: "ok",
                data: movie,
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "Movie not found",
            });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};
const getMovieByGenre = async (req, res) => {
    try {
        const genre = req.params.genre;
        const movie = await Movie.find({ genre: genre });
        if (movie) {
            return res.status(200).json({
                status: 200,
                message: "ok",
                data: movie
            })
        } else {
            res.status(404).json({
                status: 404,
                message: "Movie not found",
            });
        }

    } catch (error) {
        return res.status(500).json(error)
    }
}
const getMovie2010 = async (req, res) => {
    try {
        const movie = await Movie.find({ year: { $gte: 2010 } });

        if (movie.length > 0) {
            res.status(200).json({
                status: 200,
                message: "ok",
                data: movie,
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "No movies found released after 2010",
            });
        }
    } catch (error) {
        return res.status(500).json(error)
    }
};
module.exports = { getAllMovies, getMovieById, getMovieByTitle, getMovieByGenre, getMovie2010 };