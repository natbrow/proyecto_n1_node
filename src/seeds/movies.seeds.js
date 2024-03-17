const mongoose = require("mongoose");

const Movie = require("../api/models/movies.models");

const arrayMovies = [
    {
        title: 'The Matrix',
        director: 'Hermanas Wachowski',
        year: 1999,
        genre: 'Acción',
    },
    {
        title: 'The Matrix Reloaded',
        director: 'Hermanas Wachowski',
        year: 2003,
        genre: 'Acción',
    },
    {
        title: 'Buscando a Nemo',
        director: 'Andrew Stanton',
        year: 2003,
        genre: 'Animación',
    },
    {
        title: 'Buscando a Dory',
        director: 'Andrew Stanton',
        year: 2016,
        genre: 'Animación',
    },
    {
        title: 'Interestelar',
        director: 'Christopher Nolan',
        year: 2014,
        genre: 'Ciencia ficción',
    },
    {
        title: '50 primeras citas',
        director: 'Peter Segal',
        year: 2004,
        genre: 'Comedia romántica',
    },
]

mongoose.connect("mongodb+srv://ndlcrm6:DYjAO6UtrVGbfE0R@cluster0.g2avijr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(async () => {
    const allMovies = await Movie.find();
    if (allMovies.length > 0) {
        await Movie.collection.drop();
    }
}).catch((error) => console.log('error borrando movies', error))
    .then(async () => {
        const movieMap = arrayMovies.map((movie) => new Movie(movie));
        await Movie.insertMany(movieMap);
        console.log('Movies insertadas');

    }).catch((error) => console.log('error insertando movies', error))
    .finally(() => mongoose.disconnect());