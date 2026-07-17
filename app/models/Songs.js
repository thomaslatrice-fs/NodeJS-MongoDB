const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Song name is required"],
    unique: [true, "Only one Song with this name"],
    trim: true,
    minlength: [2, "Song name must be at least 2 characters"],
  },
  age: {
    type: Number,
    required: [true, "Song length in mins is required"],
    min: [1, "Length must be greater than 0"],
  },
  isAwardWinner: {
    type: Boolean,
    default: false,
  },
  releaseDate: {
    type: Date,
    required: [true, "Release date is required"],
  },
  timestamps: true,
});

module.exports = mongoose.model("Songs", songSchema);
