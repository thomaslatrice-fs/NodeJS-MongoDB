const mongoose = require("mongoose");

const singersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Singer name is required"],
      unique: [true, "Only one Singer with this name"],
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
    featuredSong: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
      required: [true, "A featured song is required"],
    },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model("Singers", singersSchema);
