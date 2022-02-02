const express = require("express");
const router = express.Router();

const { getMovies, rateMovie, searchMovie } = require("../controllers/movieControllers");

router.get("/:limit", getMovies);
router.post("/rate/:id", rateMovie);
router.post("/:search", searchMovie);
module.exports = router;
