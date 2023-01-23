//create mongo database
require('./data/models/connect.js')
const question = require('./data/models/question.js')
const user = require('./data/routes/userpost.js')
const admin = require('./data/routes/adminpost.js')
const institution = require('./data/models/institution.js')
const answer = require('./data/models/answer.js')
const survey = require('./data/routes/surveypost.js')

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const router = express.Router();
require('custom-env').env('localhost');
const app= express();

//middleware
app.use(bodyParser.json());
app.use(cors())


//run post and get responses
app.use('/post/user',user);
app.use('/post/survey',survey);
app.use('/post/admin',admin);
app.get('/hello', (req, res) => {
    res.send('Hello');
});

module.exports = app;
