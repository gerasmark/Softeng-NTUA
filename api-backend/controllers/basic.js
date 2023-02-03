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
    res.send(await questionnaireModel.find({questionnaireID:id},{'questions._id':0,'questions.options._id':0}).select('-_id'));
}
exports.getQuestionnaireQuestion = async (req, res) => {
    const id1 = req.params.questionnaireID;
    const id2 = req.params.questionID;
    // const data =  await questionnaireModel.find({questionnaireID:id1},{"questions": { "$elemMatch": {"qID":id2}}});
    // res.send( data);
    await questionnaireModel.find({questionnaireID:id1 },{ "questions": { "$elemMatch": { "qID": id2 } }},function(err, results) {
        if (err) throw err;
        const question = results.map(function (result) {
            return result.questions[0];
        });
        res.send({"questionnaireID": id1, "qID": id2, question});
    });
}
//,'questions._id':0,'questions.options._id':0
exports.postQuestionnaire =  async (req, res) => {
    const questionnaireID = req.params.questionnaireID;
    const questionID = req.params.questionID;
    const session = req.params.session;
    const optionID = req.params.optionID;
    await answerModel.find({
    session:session,questionnaireID:questionnaireID
    }).then(result => {
        if(result.length == 0) {
            const answer = new answerModel({
                questionnaireID: questionnaireID,
                session:session,
                answers:[]
            });
            answer.save();
        }
    })
    try {
    const answer = await answerModel.findOneAndUpdate({ session:session,questionnaireID:questionnaireID }, { $push: { answers: { ans:optionID,qID:questionID } } }, { new: true }).exec();
    console.log(answer);
    res.send("Success");}
    catch(err) {
        res.send("fail");
    }
}
exports.getSessionAnswers = async (req, res) => {
    const id = req.params.questionnaireID;
    const ses = req.params.session;
    res.send(await answerModel.find({questionnaireID:id, session:ses},{'answers._id':0}).select('-_id'));
}
// exports.getQuestionAnswers = async (req, res) => {
//     const id1 = req.params.questionnaireID;
//     const id2 = req.params.questionID;
//     await answerModel.find({questionnaireID:id1 },{ "answers": { "$elemMatch": { "qID": id2 } },"session":1},function(err, results) {
//         if (err) throw err;
//         const answers = results.map(function(result) {
//             return {
//                 ans:result.answers[0].ans,
//                 session:result.session
//             };
//         });
//         res.send({"questionnaireID":id1,"qID":id2,answers});
//     });
//     //res.send(await answerModel.find({questionnaireID:id1 },{ "answers": { "$elemMatch": { "qID": "Q09" } },"session":1 }));
// }
exports.getQuestionAnswers = async (req, res) => {
    const id1 = req.params.questionnaireID;
    const id2 = req.params.questionID;
    try {
        const results = await answerModel.find({questionnaireID:id1 },{ "answers": { "$elemMatch": { "qID": id2 } },"session":1 }).exec();
        const answers = results.map(function(result) {
            if (result.answers[0] && result.answers[0].ans) {
                return {
                    ans:result.answers[0].ans,
                    session:result.session
                };
            }
        });
        res.send({"questionnaireID":id1,"qID":id2,answers});
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}