const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running", success: true });
});

module.exports = app;
