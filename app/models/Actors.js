const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Actor name is required"],
    unique: [true, "Only one Actor with this name"],
    trim: true,
    minlength: [2, "Actor name must be at least 2 characters"],
  },
  age: {
    type: Number,
    required: [true, "Actor age is required"],
    min: [1, "Age must be greater than 0"],
  },
  isAwardWinner: {
    type: Boolean,
    default: false,
  },
  birthDate: {
    type: Date,
    required: [true, "Birth date is required"],
  },
  timestamps: true,
});

module.exports = mongoose.model("Actors", actorSchema);
