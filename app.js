require('./data/modules/connect.js')
const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const router = express.Router();
require('custom-env').env('localhost');
const users = require('./data/controllers/cruduser.js')





const app= express();

//routes
app.use('/',users)

module.exports = app;
