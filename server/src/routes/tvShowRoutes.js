const express = require("express");
const router = express.Router();

const { getTvShows, rateTvShow, searchTvShow } = require("../controllers/tvShowControllers");

router.get("/:limit", getTvShows);
router.post("/rate/:id", rateTvShow);
router.post("/:search", searchTvShow);
module.exports = router;
