const express = require("express");
const router = express.Router();
const singerRoutes = require("./singerRoutes");
const actorRoutes = require("./actorRoutes");
router.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `${req.method} - Request made` });
});

router.use("/singers", singerRoutes);
router.use("/actors", actorRoutes);
module.exports = router;
