const { json } = require("express");
const express = require("express");
const multer = require('multer');
const questionnaire = require('../models/questionnaire');
const { default: mongoose } = require("mongoose");
require('../../app.js');
const answerModel = require('../models/answer');
const userModel = require('../models/user');

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
            questionnaire.deleteMany({}, (error) => {
                if (error) {
                    res.json({"status":"failed", "reason":error});
                } else {
                    res.json({"status":"OK"});
                }
    })
}
exports.questionnaire_upd = (req, res) => {          //find fields
    const field1 = req.body.field1;
    const field2 = req.body.field2;
    const files = req.files;
    // Insert the received data into the database
    // (You would need to implement this part, which is specific to your database)
    questionnaire.insertMany({
        questionnaireID: field1,
        questionnaireTitle:field2,
        files: files
    }).then(r => {res.send({ status: 'success' }); })

    res.send({ status: 'success' });

    //console.log(req.body);
    console.log(req.files);
}
exports.resetq = (req, res) => {
    const id = req.params.id;
    questionnaire.deleteMany({  questionnaireID: id  }, (error) => {
        if (error) {
            res.json({"status":"failed", "reason":error,"question":req.params.id});
        } else {
            res.json({"status":"OK", "question":req.params.id});
        }
    });


}
