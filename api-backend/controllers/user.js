const { json } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const userModel = require('../models/user');

exports.getUser = async (req, res) => {
    res.send(await userModel.find({}));
}
exports.postUser = async (req, res) => {
    const user = new userModel(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    }catch(error){
        res.status(500).send(error);
    }
}