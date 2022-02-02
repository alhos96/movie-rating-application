const express = require("express");
const router = express.Router();

const { getMovies } = require("../controllers/movieControllers");

router.get("/", getMovies);
module.exports = router;
