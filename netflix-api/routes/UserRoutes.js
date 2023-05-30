const {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMovies,
} = require("../controller/UserController");

const router = require("express").Router();

router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies);

module.exports = router;
