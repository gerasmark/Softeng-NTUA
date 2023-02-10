const { json } = require("express");
const express = require("express");
const multer = require('multer');
const questionnaireModel = require('../models/questionnaire');
const { default: mongoose } = require("mongoose");
require('../../app.js');
const answerModel = require('../models/answer');
const userModel = require('../models/user');

const fs = require('fs');




exports.healthCheck = (req, res) => {
    const url = 'mongodb+srv://gerasimos:gerasimos@nodeexpress.xtecm6k.mongodb.net/survey?retryWrites=true&w=majority';
    const db = Number(mongoose.connection.readyState);
    if (db === 1) { res.json({"status":"OK", "dbconnection":[url]});}
    else { res.json( {"status":"failed", "dbconnection":[url]});}
}
exports.resetAll = (req, res) => {
    answerModel.deleteMany({}, (error) => {
        if (error) {
            res.json({"status":"failed", "reason":error});
        } else {
            res.json({"status":"OK"});
        }
    }),
            userModel.deleteMany({}, (error) => {
                if (error) {
                    res.json({"status":"failed", "reason":error});
                } else {
                    res.json({"status":"OK"});
                }
            }),
            questionnaireModel.deleteMany({}, (error) => {
                if (error) {
                    res.json({"status":"failed", "reason":error});
                } else {
                    res.json({"status":"OK"});
                }
    })
}

exports.questionnaire_upd = async (req, res) => {          //find fields
    const file= req.file;
    const fileData = fs.readFileSync(file.path);
    const data = JSON.parse(fileData);

    const questionnaire = new questionnaireModel(data);
    try {
        await questionnaire.save();
        res.status(201).send(questionnaire);
    }catch(error) {
        res.status(500).send(error);
    }
}


exports.resetq = (req, res) => {
    const id = req.params.id;
    questionnaireModel.deleteMany({  questionnaireID: id  }, (error) => {
        if (error) {
            res.json({"status":"failed", "reason":error});
        } else {
            res.json({"status":"OK"});
        }
    });


}
// const extract_csv = async (req, res) => {
//     try {
//         const { questionnaireID } = req.params;
//         const questionnaire = await QuestionnaireSchema.findOne({
//             _id: questionnaireID,
//         });
//
//         if (!questionnaire) {
//             res.status(400).json({ msg: "Bad Request" });
//         } else {
//             const { questions, sessions } = questionnaire;
//
//             var result = [];
//             for (var i in sessions) {
//                 const { sessionID, pairs } = sessions[i];
//                 var obj = { sessionID: sessionID, pair: [] };
//                 for (var j in pairs) {
//                     const { qID, optionID } = pairs[j];
//
//                     const op = optionID;
//
//                     for (var k in questions) {
//                         const { _id, options, qtext } = questions[k];
//                         if (_id == qID) {
//                             for (var l in options) {
//                                 const { _id, opttext } = options[l];
//
//                                 if (_id == op) {
//                                     const p = {
//                                         qtext: qtext,
//                                         opttext: opttext,
//                                     };
//                                     obj.pair.push(p);
//                                     break;
//                                 }
//                             }
//                             break;
//                         }
//                     }
//                 }
//                 result.push(obj);
//             }
