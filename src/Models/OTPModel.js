const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: {type:String},
    otp: {type:String},
    status: {type:Number,default:0},
});

const OTPModel = mongoose.model('otps', otpSchema);

module.exports = OTPModel;