
const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const router = express.Router();
require('custom-env').env('localhost');

const app= express();

module.exports = app;
