const OTPModel = require('../Models/OTPModel');


const createOTP = async (req, res) => {
  try {
    const otp = new OTPModel(req.body);
    const savedOTP = await otp.save();
    res.json(savedOTP);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllOTPs = async (req, res) => {
  try {
    const otps = await OTPModel.find();
    res.json(otps);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOTP = async (req, res) => {
  try {
    const updatedOTP = await OTPModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedOTP);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const deleteOTP = async (req, res) => {
  try {
    await OTPModel.findByIdAndRemove(req.params.id);
    res.send('OTP deleted');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOTP,
  getAllOTPs,
  updateOTP,
  deleteOTP,
};
