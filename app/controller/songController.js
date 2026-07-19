const Songs = require("../models/Songs");

const getAllSongs = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: `${req.methof} - Get all Singers`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getSongById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Singer endpoint`,
  });
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
    message: `${req.method} - Singer updated`,
  });
};

const deleteSong = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Singer deleted`,
  });
};

module.exports = {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong,
};
