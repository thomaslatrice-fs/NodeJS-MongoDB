const express = require("express");
const router = express.Router();
const {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong,
} = require("../controller/actorController");

router.get("/", getAllSongs);

router.get("/:id", getSongsById);

router.post("/", createSong);

router.put("/:id", updateSong);

router.delete("/:id", deleteSong);

module.exports = router;
