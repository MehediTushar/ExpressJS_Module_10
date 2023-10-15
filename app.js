const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const authVerifyMiddleware = require('./Middlewares/AuthVerifyMiddleware');

const app = express();

mongoose.connect('mongodb://localhost:27017/studentCrud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

const studentsRoutes = require('./Routes/studentRoutes');
const worksRoutes = require('./Routes/workRoutes');
const otpRoutes = require('./Routes/otpRoutes');

app.use('/students', studentsRoutes);
app.use('/works', authVerifyMiddleware, worksRoutes);
app.use('/otp', otpRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong');
});

module.exports = app;
