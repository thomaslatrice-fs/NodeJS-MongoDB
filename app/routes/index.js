const express = require("express");
const router = express.Router();
const singerRoutes = require("./singerRoutes");
const songRoutes = require("./songRoutes");
router.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `${req.method} - Request made` });
});

router.use("/singers", singerRoutes);
router.use("/songs", songRoutes);
module.exports = router;
