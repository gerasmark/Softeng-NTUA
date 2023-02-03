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
exports.getSessionAnswers = async (req, res) => {
    const id = req.params.questionnaireID;
    const ses = req.params.session;
    res.send(await answerModel.find({questionnaireID:id, session:ses}));
}
exports.getQuestionAnswers = async (req, res) => {
    const id1 = req.params.questionnaireID;
    const id2 = req.params.questionID;
    await answerModel.find({questionnaireID:id1 },{ "answers": { "$elemMatch": { "qID": "Q09" } },"session":1},function(err, results) {
        if (err) throw err;
        const answers = results.map(function(result) {
            return result.answers[0];
        });
        res.send({"questionnaireID":id1,"qID":id2,answers});
    });
    //res.send(await answerModel.find({questionnaireID:id1 },{ "answers": { "$elemMatch": { "qID": "Q09" } },"session":1 }));
}