const constructURL = require('../lib/constructURL');
const errorHandler = require('../lib/errorHandler');
const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');
const https = require('https');

module.exports = function(o) {

    var url = constructURL('/doanswer/', param1, param2, param3, param4, format);

    console.log(chalk.green(url));

}