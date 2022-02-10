const { Movie } = require("../models/movieModel");
const _ = require("lodash");

exports.getMovies = async (req, res, next) => {
  const limit = parseInt(req.params.limit);

  const movies = await Movie.find().where("type").equals("movie").limit(limit).sort({ averageRating: "desc" });

  res.status(200).json(movies);
};

exports.rateMovie = async (req, res, next) => {
  const { id } = req.params;
  const { userRating, moviesAmount } = req.body;

  const movie = await Movie.findOne({ _id: id });

  movie.ratings.push(userRating);

  movie.averageRating = _.mean(movie.ratings);

  movie.save();

  const movies = await Movie.find()
    .where("type")
    .equals("movie")
    .sort({ averageRating: "desc" })
    .limit(+moviesAmount);

  res.status(200).json(movies);
};

exports.searchMovie = async (req, res, next) => {
  const search = req.params.search.toLowerCase();

  var searchedMovies = [];

  searchedMovies = await Movie.find({
    type: "movie",
    title: { $regex: search, $options: "i" },
  }).sort({ averageRating: "desc" });

  // if nothing is found by title look in description
  if (searchedMovies.length === 0) {
    searchedMovies = await Movie.find({
      type: "movie",
      description: { $regex: search, $options: "i" },
    }).sort({ averageRating: "desc" });
  }

  res.status(200).json(searchedMovies);
};
