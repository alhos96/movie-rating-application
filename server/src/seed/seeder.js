require("dotenv").config();
const { Movie } = require("../models/movieModel");
const mongoose = require("mongoose");
const movies = require("./movies");
const config = require("../../config");
const _ = require("lodash");

mongoose.connect(config.mongo).then(() => {
  mongoose.connection.collections["movies"].drop(function (err) {
    console.log("movies collection dropped");
  });

  seed();
});

var done = 0;

function seed() {
  movies.forEach(async (movie, i) => {
    let ratings = Array(3)
      .fill()
      .map(() => Math.floor(Math.random() * 5) + 1);

    let newMovie = new Movie({
      title: movie.title,
      release: movie.year,
      image: movie.posterUrl,
      cast: movie?.actors,
      description: movie?.plot,
      ratings: ratings,
      averageRating: _.mean(ratings).toFixed(0),
      type: movie.type,
    });

    try {
      await newMovie.save();
      done++;
    } catch (error) {
      console.log(error);
    }

    if (done === movies.length) {
      console.log("seeding movies done");

      mongoose.disconnect();
    }
  });
}
