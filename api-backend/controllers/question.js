const { json } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const questionModel = require('../models/question');

exports.getQuestion = async (req, res) => {
    res.send(await questionModel.find({}));
}
exports.postQuestion = async (req, res) => {
    const question = new questionModel(req.body);
    try {
        await question.save();
        res.status(201).send(question);
    }catch(error){
        res.status(500).send(error);
    }
}