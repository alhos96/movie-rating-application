const { Movie } = require("../models/movieModel");
const _ = require("lodash");

exports.getTvShows = async (req, res, next) => {
  const limit = parseInt(req.params.limit);

  const tvShows = await Movie.find().where("type").equals("tvShow").sort({ averageRating: "desc" }).limit(limit);

  res.status(200).json(tvShows);
};

exports.rateTvShow = async (req, res, next) => {
  const { id } = req.params;
  const { userRating } = req.body;

  const tvShow = await Movie.findOne({ _id: id });

  tvShow.ratings.push(userRating);

  tvShow.averageRating = _.mean(tvShow.ratings);

  tvShow.save();

  const tvShows = await Movie.find().where("type").equals("tvShow").sort({ averageRating: "desc" }).limit(10);

  res.status(200).json(tvShows);
};
