const Songs = require("../models/Songs");

const getAllSongs = async (req, res) => {
  try {
    const songs = await Songs.find();

    res.status(200).json({
      success: true,
      count: songs.length,
      data: songs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Songs.findById(id);

    if (!song) {
      return res.status(404).json({
        success: false,
        message: "Song not found",
      });
    }
    res.status(200).json({
      id,
      success: true,
      data: song,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const createSong = async (req, res) => {
  try {
    const song = await Songs.create(req.body);

    res.status(201).json({
      success: true,
      data: song,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateSong = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Song updated`,
  });
};

const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;

    const song = await Songs.findByIdAndDelete(id);

    if (!song) {
      return res.status(404).json({
        success: false,
        message: "Song not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Song deleted successfully",
      data: song,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong,
};
