const mongoose = require("mongoose");
const { Schema, model } = mongoose;

exports.Movie = model(
  "Movie",
  new Schema({
    title: String,
    titleForSearch: String, //lowercased movie title
    release: Number,
    image: String,
    description: String,
    cast: [String],
    ratings: [Number],
    type: String,
    averageRating: Number,
  })
);
