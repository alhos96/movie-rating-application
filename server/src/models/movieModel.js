const mongoose = require("mongoose");
const { Schema, model } = mongoose;

exports.Movie = model(
  "Movie",
  new Schema({
    title: { type: String, index: true },
    release: Number,
    image: String,
    description: { type: String, index: true },
    cast: [String],
    ratings: [Number],
    type: String,
    averageRating: Number,
  })
);
