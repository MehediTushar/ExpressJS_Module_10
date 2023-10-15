const StudentsModel = require('../Models/StudentsModel');

const createStudent = async (req, res) => {
  try {
    const student = new StudentsModel(req.body);
    const savedStudent = await student.save();
    res.json(savedStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await StudentsModel.find();
    res.json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await StudentsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const deleteStudent = async (req, res) => {
  try {
    await StudentsModel.findByIdAndRemove(req.params.id);
    res.send('Student deleted');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
};
