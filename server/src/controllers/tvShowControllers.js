const { Movie } = require("../models/movieModel");
const _ = require("lodash");

exports.getTvShows = async (req, res, next) => {
  const limit = parseInt(req.params.limit);

  const tvShows = await Movie.find().where("type").equals("tvShow").sort({ averageRating: "desc" }).limit(limit);

  res.status(200).json(tvShows);
};

exports.rateTvShow = async (req, res, next) => {
  const { id } = req.params;
  const { userRating, tvShowsAmount } = req.body;

  const tvShow = await Movie.findOne({ _id: id });

  tvShow.ratings.push(userRating);

  tvShow.averageRating = _.mean(tvShow.ratings);

  tvShow.save();

  const tvShows = await Movie.find().where("type").equals("tvShow").sort({ averageRating: "desc" }).limit(tvShowsAmount);

  res.status(200).json(tvShows);
};

exports.searchTvShow = async (req, res, next) => {
  const search = req.params.search.toLowerCase();

  var searchedTvShows = [];

  searchedTvShows = await Movie.find({ type: "tvShow", title: { $regex: search, $options: "i" } }).sort({ averageRating: "desc" });

  // if nothing is found by title look in description
  if (searchedTvShows.length === 0) {
    searchedTvShows = await Movie.find({
      type: "tvShow",
      description: { $regex: search, $options: "i" },
    }).sort({ averageRating: "desc" });
  }

  res.status(200).json(searchedTvShows);
};
