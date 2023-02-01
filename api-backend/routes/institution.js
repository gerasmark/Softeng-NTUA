const { json } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const institutionModel = require('../models/institution');
const app = express.Router();
const institutionController = require('../controllers/institution');

//get request
app.get('/',institutionController.getInstitution);

module.exports = app;
// post request
app.post('/', institutionController.postInstitution);