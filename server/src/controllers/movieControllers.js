const { Movie } = require("../models/movieModel");
const _ = require("lodash");

exports.getMovies = async (req, res, next) => {
  const movies = await Movie.find().where("type").equals("Movie").sort({ averageRating: "desc" });

  const tvShows = await Movie.find().where("type").equals("TV-show").sort({ averageRating: "desc" });

  res.status(200).json({ movies, tvShows });
};

exports.rateMovie = async (req, res, next) => {
  const { id } = req.params;
  const { userRating } = req.body;
  console.log(id);

  const movie = await Movie.findOne({ _id: id });

  movie.ratings.push(userRating);

  movie.averageRating = _.mean(movie.ratings);

  movie.save();

  const movies = await Movie.find().where("type").equals("Movie").sort({ averageRating: "desc" });

  const tvShows = await Movie.find().where("type").equals("TV-show").sort({ averageRating: "desc" });

  res.status(200).json({ movies, tvShows });
};
