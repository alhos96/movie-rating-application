const express = require("express");
const router = express.Router();

const { getMovies, rateMovie } = require("../controllers/movieControllers");

router.get("/:limit", getMovies);
router.post("/rate/:id", rateMovie);
module.exports = router;
