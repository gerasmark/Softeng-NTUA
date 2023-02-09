const constructURL = require('../lib/constructURL');
const errorHandler = require('../lib/errorHandler');
const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');
const https = require('https');

module.exports = function(o) {

    isWrong = false;
    
    if (process.argv[3] === undefined){
        isWrong = true;
    }

    if (!isWrong) {
    
        param1 = process.argv[3];

        var url = constructURL('/resetq/', param1);

        console.log(chalk.green(url));
        //axios(url);
    }
    else {
        console.log(chalk.red('Error: mandatory parameters omitted\n'));
        console.log(chalk.yellow('Mandatory Parameters: \n --questionnaire_id [id]'));
        console.log(chalk.yellow('ex: se2222 resetq questionnaire_id\n'));
    }

}