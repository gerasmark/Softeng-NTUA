const constructURL = require('../lib/constructURL');
const errorHandler = require('../lib/errorHandler');
const chalk = require('chalk');
const axios = require('axios');
const https = require('https');

module.exports = function(o) {
    var url = constructURL('/healthcheck/');
    // var config = {
    //     method: 'get',
    //     url: 'http://localhost:8080/homePageUser',
    //     httpsAgent: new https.Agent({ rejectUnauthorized: false })
    // };
    // axios(config)
    //     .then(res => {
    //         console.log(chalk.green('Connection status with database: ' + res.data.status))
    // })
    //     .catch(err => {
    //         errorHandler(err);
    // })

    // const options = {
    //     method: 'get',
    //     url: url,
    // //    httpsAgent: new https.Agent({ rejectUnauthorized: false })
    // };
 //   axios('http://localhost:8080/homePageUser')
  //      .then((response) => {
 //           console.log(response.data.sta);
  //      })
        // .catch(err => {
        //     console.log(err);
        // })

    // console.log(chalk.green(url));
    // axios(url)
    // .then(res => {
    //     console.log(chalk.green('Connection status with database: ' + res.data.status))
    // })


//     https.get('http://localhost:8080/homePageUser', res => {
//         let data = [];
//         const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//         console.log('ok');
   
//    });

    // https.get('http://localhost:8080/homePageUser', res => {
    //     console.log('ok');
    //     // let data = [];
    //     // const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    //     // console.log('Status Code:', res.statusCode);
    //     // console.log('Date in Response header:', headerDate);

    //     // res.on('data', chunk => {
    //     //     data.push(chunk);
    //     // });

    //     // res.on('end', () => {
    //     //     console.log('Response ended: ');
    //     //     const users = JSON.parse(Buffer.concat(data).toString());

    //     //     for(user of users) {
    //     //         console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    //     //     }
    //     // });
    // }).on('error', err => {
    //     console.log('Error');
    // });
console.log(chalk.green(url));
}