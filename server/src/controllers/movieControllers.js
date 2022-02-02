const { Movie } = require("../models/movieModel");
const _ = require("lodash");

exports.getMovies = async (req, res, next) => {
  const limit = parseInt(req.params.limit);

  const movies = await Movie.find().where("type").equals("movie").sort({ averageRating: "desc" }).limit(limit);

  res.status(200).json(movies);
};

exports.rateMovie = async (req, res, next) => {
  const { id } = req.params;
  const { userRating } = req.body;
  console.log(id);

  const movie = await Movie.findOne({ _id: id });

  movie.ratings.push(userRating);

  movie.averageRating = _.mean(movie.ratings);

  movie.save();

  const movies = await Movie.find().where("type").equals("movie").sort({ averageRating: "desc" }).limit(10);

  res.status(200).json(movies);
};
