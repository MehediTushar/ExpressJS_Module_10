const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  email: {type:String},
  firstName: {type:String},
  lastName: {type:String},
  mobile: {type:String},
  password: {type:String},
  address: {type:String},
  roll: {type:String},
  class: {type:String},
});

const StudentsModel = mongoose.model('students', studentSchema);

module.exports = StudentsModel;