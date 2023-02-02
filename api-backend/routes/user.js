const { json } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const userModel = require('../models/user');
const app = express.Router();
const userController = require('../controllers/user');
//get request
app.get('/', userController.getUser);

  module.exports = app;
// post request
app.post('/postUser', userController.postUser);