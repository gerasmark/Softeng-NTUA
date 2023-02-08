const constructURL = require('../lib/constructURL');
const errorHandler = require('../lib/errorHandler');
const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');
const https = require('https');

module.exports = function(o) {

    var url = constructURL('/question/', param1, param2, format);

    console.log(chalk.green(url));

}