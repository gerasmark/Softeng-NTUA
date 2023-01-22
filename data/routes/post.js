const express = require("express");
const userModel = require('../models/user');
const app = express.Router();

//post request
app.get('/', (req, res) => {
  res.send('hello world')
});
  module.exports = app;
  