const express = require("express");
const router = express.Router();

const { getTvShows, rateTvShow } = require("../controllers/tvShowControllers");

router.get("/:limit", getTvShows);
router.post("/rate/:id", rateTvShow);
module.exports = router;
