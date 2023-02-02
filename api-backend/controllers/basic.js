const { json } = require("express");
const express = require("express");
const multer = require('multer');
const questionnaireModel = require('../models/questionnaire');
const { default: mongoose } = require("mongoose");
require('../../app.js');
const answerModel = require('../models/answer');
const userModel = require('../models/user');
const surveyModel = require("../models/questionnaire");

exports.getQuestionnaire = async (req, res) => {
    res.send(await questionnaireModel.find({}));
}
exports.getQuestionnaireQuestion = async (req, res) => {

}
exports.postQuestionnaire = async (req, res) => {

}