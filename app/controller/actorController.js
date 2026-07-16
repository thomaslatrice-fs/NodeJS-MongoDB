const getAllActors = async (req, res) => {
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
const getActorById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Singer endpoint`,
  });
};

const createActor = (req, res) => {
  const data = req.body;
  console.log("data >>>", data);
  res.status(200).json({
    success: true,
    message: `${req.method} - Singer created`,
  });
};

const updateActor = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Singer updated`,
  });
};

const deleteActor = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Singer deleted`,
  });
};

module.exports = {
  createActor,
  getAllActors,
  getActorById,
  updateActor,
  deleteActor,
};
