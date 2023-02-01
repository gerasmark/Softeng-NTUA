const { json } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");


exports.healthCheck = (req, res) => {
    const url = 'mongodb+srv://gerasimos:gerasimos@nodeexpress.xtecm6k.mongodb.net/survey?retryWrites=true&w=majority'
    mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            })
    const db = mongoose.connection;

    db.on('error', res.json( {"status":"failed", "dbconnection":[url]}));

    db.once('open', res.json( {"status":"OK", "dbconnection":[url]}));
}