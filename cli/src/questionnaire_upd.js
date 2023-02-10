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
    
        source = process.argv[3]; //probably does not work since it is a file name

        var url = constructURL('/questionnaire_upd/', source);

        //needs to read the file and save it to a const data
        //then axios 'post' method 

        console.log(chalk.green(url));
        //axios(url);
    }
    else {
        console.log(chalk.red('Error: mandatory parameters omitted\n'));
        console.log(chalk.yellow('Mandatory Parameters: \n --source [file]'));
        console.log(chalk.yellow('ex: se2222 questionnaire_upd source\n'));
    }

}