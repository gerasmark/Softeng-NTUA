const { json } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const questionModel = require('../models/question');
const app = express.Router();
const questionController = require('../controllers/question');
//get request
app.get('/', questionController.getQuestion
);

  module.exports = app;
// post request
app.post('/', questionController.postQuestion);
