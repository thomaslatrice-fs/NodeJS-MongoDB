const express = require("express");
const router = express.Router();
const {
  createSinger,
  getAllSingers,
  getSingerById,
  updateSinger,
  deleteSinger,
} = require("../controller/singercontroller");

router.get("/", getAllSingers);

router.get("/:id", getSingerById);

router.post("/", createSinger);

router.put("/:id", updateSinger);

router.delete("/:id", deleteSinger);

module.exports = router;
