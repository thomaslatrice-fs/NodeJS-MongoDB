const mongoose = require("mongoose");

const singersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Singer name is required"],
      trim: true,
      minlength: [2, "Singer name must be at least 2 characters"],
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
      enum: {
        values: ["R&B", "Pop", "Hip-Hop", "Country", "Rock", "Gospel"],
      },
    },
    albumReleased: {
      type: Number,
      required: [true, "Album count is required"],
      min: [0, "Album count cannot be negative"],
    },
    active: {
      type: Boolean,
      default: true,
    },
    featuredActor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Actor",
      required: [true, "A featured actor is required"],
    },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model("Singers", singersSchema);
