const { json } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
require('../../app.js');
const answerModel = require('../models/answer');
exports.healthCheck = (req, res) => {
    const url = 'mongodb+srv://gerasimos:gerasimos@nodeexpress.xtecm6k.mongodb.net/survey?retryWrites=true&w=majority';
    const db = Number(mongoose.connection.readyState);
    if (db === 1) { res.json({"status":"OK", "dbconnection":[url]});}
    else { res.json( {"status":"failed", "dbconnection":[url]});}
}
exports.resetAll = (req, res) => {

}
exports.questionnaire_upd = (req, res) => {

}
exports.resetq = (req, res) => {
    answerModel.deleteMany({  questionnaireID: req.params.questionnaireID });


}