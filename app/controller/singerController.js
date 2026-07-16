const Singers = require("../models/Singers");

const getAllSingers = async (req, res) => {
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
const getSingerById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Singer endpoint`,
  });
};

const createSinger = (req, res) => {
  const data = req.body;
  console.log("data >>>", data);
  res.status(200).json({
    success: true,
    message: `${req.method} - Singer created`,
  });
};

const updateSinger = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Singer updated`,
  });
};

const deleteSinger = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Singer deleted`,
  });
};

module.exports = {
  createSinger,
  getAllSingers,
  getSingerById,
  updateSinger,
  deleteSinger,
};
