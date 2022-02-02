const { Movie } = require("../models/movieModel");
exports.getMovies = async (req, res, next) => {
  const movies = await Movie.find().where("type").equals("Movie").sort({ averageRating: "desc" });

  const tvShows = await Movie.find().where("type").equals("TV-show").sort({ averageRating: "desc" });

  res.status(200).json({ movies, tvShows });
};
