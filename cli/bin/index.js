#!/usr/bin/env node

// libraries required
const commands = require("commander");
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
// libraries required

// functions
const healthcheck = require('../src/healthcheck');
const resetall = require('../src/resetall');
const resetq = require('../src/resetq');
const questionnaire = require('../src/questionnaire');
//const questionnaire_upd = require('../src/questionnaire_upd');
const question = require('../src/question');
const doanswer = require('../src/doanswer');
const getsessionanswers = require('../src/getsessionanswers');
const getquestionanswers = require('../src/getquestionanswers');
// functions


// healthcheck
commands.command('healthcheck')
        .description('Confirms end-to-end connectivity between the user and the database')
        .action( function(o) { healthcheck(o) } )
// healthcheck

// reset all
commands.command('resetall')
        .description('Resets database and initializes all system data')
        .action( function(o) { resetall(o) } )
// reset all

// reset q
commands.command('resetq')
        .description('Resets all answers to specified questionnaire')
        .action( function(o) { resetq(o) } )
// reset q

// questionnaire
commands.command('questionnaire')
        .description('Returns data and questions of specified questionnaire')
        .action( function(o) { questionnaire(o) } )
// questionnaire

// questionnaire_upd
commands.command('questionnaire_upd')
        .description('Uploads a JSON file with data of a new questionnaire')
        .action( function(o) { questionnaire_upd(o) } )
// questionnaire_upd

// question
commands.command('question')
        .description('Returns all contents of the specified question from the specified questionnaire')
        .action( function(o) { question(o) } )
// question

// doanswer
commands.command('doanswer')
        .description('Submits the given answer to the specified question of the specified questionnaire')
        .action( function(o) { doanswer(o) } )
// doanswer

// getsessionanswers
commands.command('getsessionanswers')
        .description('Returns all answers given to the specified questionnaire durion the session')
        .action( function(o) { getsessionanswers(o) } )
// getsessionanswers

// getquestionanswers
commands.command('getquestionanswers')
        .description('Returns all answers given to a specified question of a specified questionnaire')
        .action( function(o) { getquestionanswers(o) } )
// getquestionanswers

commands.parse(process.argv);
var scope = process.argv[2];
var scopeList = ['healthcheck', 'resetall', 'resetq', 'questionnaire_upd',
                 'questionnaire', 'question', 'doanswer', 'getsessionanswers', 'getquestionanswers'];

if (process.argv.length < 3) {
    console.log(process.argv.length < 3);
    console.log(chalk.red('Error occured! Scope was not specified!'));
    console.log(chalk.yellow('Choose one of the following:'));
    console.log(chalk.yellow('healthcheck'));
    console.log(chalk.yellow('resetall'));
    console.log(chalk.yellow('resetq'));
    console.log(chalk.yellow('questionnaire_upd'));
    console.log(chalk.yellow('questionnaire'));
    console.log(chalk.yellow('question'));
    console.log(chalk.yellow('doanswer'));
    console.log(chalk.yellow('getsessionanswers'));
    console.log(chalk.yellow('getquestionanswers'));
}
else if (!scopeList.includes(scope)) {
    console.log(chalk.red('Error, this command does not exist!'));
    console.log(chalk.yellow('For more information, type --help'));
}
