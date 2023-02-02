const { json } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express.Router();
const adminController = require('../controllers/adminServer');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ dest: 'uploads/'});   // storage: storage
//get request

app.get('/healthcheck', adminController.healthCheck);
app.get('/resetall', adminController.resetAll);
app.post('/resetq/:questionnaireID', adminController.resetq);

app.post('/questionnaire_upd', upload.any(), adminController.questionnaire_upd);
module.exports = app;
