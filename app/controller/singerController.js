const Singers = require("../models/Singers");

const getAllSingers = async (req, res) => {
  try {
    const singers = await Singers.find();

    res.status(200).json({
      success: true,
      count: singers.length,
      data: singers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getSingerById = async (req, res) => {
  try {
    const { id } = req.params;
    const singer = await Singers.findById(id);

    if (!singer) {
      return res.status(404).json({
        success: false,
        message: "Singer not found",
      });
    }
    res.status(200).json({
      id,
      success: true,
      data: singer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createSinger = async (req, res) => {
  try {
    const singer = await Singers.create(req.body);

    res.status(201).json({
      success: true,
      data: singer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateSinger = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Singer updated`,
  });
};

const deleteSinger = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSinger = await Singers.findByIdAndDelete(id);

    if (!deletedSinger) {
      return res.status(404).json({
        success: false,
        message: "Singer not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Singer deleted successfully",
      data: deletedSinger,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createSinger,
  getAllSingers,
  getSingerById,
  updateSinger,
  deleteSinger,
};
