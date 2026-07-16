const express = require("express");
const router = express.Router();
const {
  createActor,
  getAllActors,
  getActorById,
  updateActor,
  deleteActor,
} = require("../controller/actorController");

router.get("/", getAllActors);

router.get("/:id", getActorById);

router.post("/", createActor);

router.put("/:id", updateActor);

router.delete("/:id", deleteActor);

module.exports = router;
