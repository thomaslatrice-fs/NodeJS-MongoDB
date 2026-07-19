const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Song name is required"],
      unique: [true, "Only one Song with this name"],
      trim: true,
      minlength: [2, "Song name must be at least 2 characters"],
    },
    duration: {
      type: Number,
      required: [true, "Song length in mins is required"],
      min: [1, "Length must be greater than 0"],
    },
    releaseDate: {
      type: Date,
      required: [true, "Release date is required"],
    },
    singer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Singer",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Songs", songSchema);
