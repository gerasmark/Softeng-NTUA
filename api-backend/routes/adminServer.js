const { json } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express.Router();
const adminController = require('../controllers/adminServer');
//get request
app.get('/healthcheck', adminController.healthCheck);
module.exports = app;