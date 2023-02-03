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
    const id = req.params.questionnaireID;
    res.send(await questionnaireModel.find({questionnaireID:id}));
}
exports.getQuestionnaireQuestion = async (req, res) => {

}
exports.postQuestionnaire = async (req, res) => {
    const questionnaireID = req.params.questionnaireID;
    const questionID = req.params.questionID;
    const session = req.params.session;
    const optionID = req.params.optionID;
    //res.send( await answerModel.find({ session:session,questionnaireID:questionnaireID},{answers: { $elemMatch: { qID:questionID}}}));
    answerModel.findOneAndUpdate({ session:session,questionnaireID:questionnaireID,answers:  { qID:questionID}}, {$set: {answers:{ans:optionID }}}, function (err, result) {
        if (err) {res.send({ status: "fail",r:err,re:result});}
        else {res.send({ status: "success" ,re:result });}
    });


}