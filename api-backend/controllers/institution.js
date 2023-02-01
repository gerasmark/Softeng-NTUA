const { json } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const institutionModel = require('../models/institution');

exports.getInstitution = async (req, res, next) => {
        res.send(await institutionModel.find({}));

}
exports.postInstitution = async (req, res, next) => {
    const institution = new institutionModel(req.body);
    try {
        await institution.save();
        res.status(201).send(institution);
    }catch(error){
        res.status(500).send(error);
    }
}