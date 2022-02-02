const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const config = require("../config");

const movieRoutes = require("./routes/movieRoutes");

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());

//routes

app.use("/api/movies", movieRoutes);

mongoose
  .connect(config.mongo)
  .then(() => {
    app.listen(config.port);
    console.log(`Server started on port:${config.port}`);
  })
  .catch((err) => {
    console.log(err);
  });
