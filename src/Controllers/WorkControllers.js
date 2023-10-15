const WorksModel = require('../Models/WorkModel'); 

const createWork = async (req, res) => {
  try {
    const work = new WorksModel(req.body);
    const savedWork = await work.save();
    res.json(savedWork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getAllWorks = async (req, res) => {
  try {
    const works = await WorksModel.find();
    res.json(works);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateWork = async (req, res) => {
  try {
    const updatedWork = await WorksModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedWork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteWork = async (req, res) => {
  try {
    await WorksModel.findByIdAndRemove(req.params.id);
    res.send('Work deleted');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createWork,
  getAllWorks,
  updateWork,
  deleteWork,
};

