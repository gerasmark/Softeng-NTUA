//create mongo database
require('./data/models/connect.js')
const question = require('./data/models/question.js')
const user = require('./data/routes/post.js')
const admin = require('./data/models/admin.js')
const institution = require('./data/models/institution.js')
const answer = require('./data/models/answer.js')
const survey = require('./data/models/survey.js')


//const users = require('./data/models/cruduser.js')
const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const router = express.Router();
require('custom-env').env('localhost');
const app= express();

//run post and get responses
app.use('/post/user',user)
app.get('/hello', (req, res) => {
    res.send('Hello');
});

module.exports = app;
