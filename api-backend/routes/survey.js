const { json } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const surveyModel = require('../models/survey');
const app = express.Router();
const surveyController = require('../controllers/survey');
//get request
app.get('/',surveyController.getSurvey);

  module.exports = app;
// post request
app.post('/', surveyController.postSurvey);