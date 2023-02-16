const constructURL = require('../lib/constructURL');
const errorHandler = require('../lib/errorHandler');
const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');
const https = require('https');
const FormData = require('form-data');
const request = require('request');
//const upload = multer({ dest: '../uploads'});
const express = require('express');
//const adminController = require('../../api-backend/controllers/adminServer');
const multer = require('multer');
const upload = multer({dest:'D:/Documents/GitHub/SoftEng22-22/cli/uploads' })
const questionnaireModel = require('D:/Documents/GitHub/SoftEng22-22/api-backend/models/questionnaire');
// const { json } = require("express");
// const express = require("express");
//const multer = require('multer');
// const questionnaireModel = require('../api-backend/models/questionnaire');
//const appfunction = require('../../api-backend/routes/adminServer');
//const app = require('../../app');
//const app = express.Router();

// module.exports = function(o) {

//     isWrong = false;
    
//     if (process.argv[3] === undefined){
//         isWrong = true;
//     }

//     if (!isWrong) {
    
//         source = process.argv[3]; //file path

//         var url = constructURL('/questionnaire_upd/');
//         //console.log(process.argv);

//         // const formData = new FormData();
//         // formData.append('file', fs.createReadStream(source));

//         // const file = fs.createReadStream(source);
//         // const formData = new FormData();
//         // formData.append('file', file);

//         // console.log(formData);

//         // var config = {
//         //     method: 'post',
//         //     url: url,
//         //     data: formData,
//         //     headers: formData.getHeaders()
//         //   };
        
//         // axios(config)
//         //     .then((response) => {
//         //         console.log(response.data);
//         //     })
//         //     .catch((error) => {
//         //         console.log(error);
//         //     });
        

//         const file = fs.readFile(source, 'utf8', (err, data) => {
//             if (err) {
//               console.error(err);
//             } else {
//                 const file = data;
//                 const formData = new FormData();
//                 formData.append('file', file);
//                 var config = {
//                     method: 'post',
//                     url: url,
//                     // headers: {
//                     //     'Content-Type': 'multipart/form-data'
//                     // },
//                     // formData: {
//                     //     "file": JSON.parse(file)
//                     // },
//                     data: formData,
//                     headers: formData.getHeaders(),
//                     // data: JSON.parse(file),
//                     httpsAgent: new https.Agent({ rejectUnauthorized: false })
//                 };
//                 axios(config)
//                     .then(res => {
//                         console.log(chalk.green("File updated successfully"));
//                         //console.log(file);
//                 })
//                     .catch(err => {
//                         //errorHandler(err);
//                         console.error(err);
//                 })
//               //console.log(file); // This will print the contents of the file
//             }
//           });
        
//         //const filedata = file;
//         //const file = fs.readFile(source, 'utf8', (err,data) => err && console.error(err));
//         //console.log(file);

//         // var config = {
//         //     method: 'post',
//         //     url: url,
//         //     headers: {
//         //         'Content-Type': 'multipart/form-data'
//         //     },
//         //     // formData: {
//         //     //     "file": file
//         //     // },
//         //     data: file,
//         //     httpsAgent: new https.Agent({ rejectUnauthorized: false })
//         // };
//         // axios(config)
//         //     .then(res => {
//         //         console.log(chalk.green("File updated successfully"));
//         //         //console.log(file);
//         // })
//         //     .catch(err => {
//         //         errorHandler(err);
//         //         //console.log(err);
//         // })

//         //needs to read the file and save it to a const data
//         //then axios 'post' method 
//         //console.log(chalk.green("File uploaded successfully"));
//         console.log(chalk.green(url));
//         //console.log(process.argv);
//         //axios(url);
//     }
//     else {
//         console.log(chalk.red('Error: mandatory parameters omitted\n'));
//         console.log(chalk.yellow('Mandatory Parameters: \n --source [file]'));
//         console.log(chalk.yellow('ex: se2222 questionnaire_upd source\n'));
//     }

// }

// const constructURL = require('../lib/constructURL');
// const errorHandler = require('../lib/errorHandler');
// const axios = require('axios');
// const chalk = require('chalk');
// const fs = require('fs');
// const https = require('https');
// const FormData = require('form-data');
// const { json } = require("express");
// const express = require("express");
// const multer = require('multer');
// const questionnaireModel = require('../api-backend/models/questionnaire');
// const questionnaire_upd = require('../api-backend/controllers/adminServer.js')


module.exports = function(o) {




    isWrong = false;
    
    if (process.argv[3] === undefined){
        isWrong = true;
    }

    if (!isWrong) {
    
        source = process.argv[3]; //file path

        var url = constructURL('/questionnaire_upd/');
    

        
        
        const file = fs.readFile(source, 'utf8', (err, data) => {
            if (err) {
              console.error(err);
            } else {
                const file = JSON.parse(data);
                //console.dir(file,{depth:null});
                console.log(file);


                async function questionnaire_upd(file) {          //find fields
                    //const file= req.file;
                    //const fileData = fs.readFileSync(file.path);
                    //const data = JSON.parse(fileData);
                
                    const questionnaire = new questionnaireModel(file);
                    try {
                        await questionnaire.save();
                        //res.status(200).send(questionnaire);
                    }catch(error) {
                        //res.status(500).send(error);
                    }
                }
                //app.post('/questionnaire_upd', file, appfunction.adminController.questionnaire_upd);
                //const formData = new FormData();
                //formData.append('file', file);



                // var config = {
                //     method: 'post',
                //     url: url,
                //     headers: {
                //         'Content-Type': 'multipart/form-data'
                //     },
                //     // formData: {
                //     //     "file": JSON.parse(file)
                //     // },
                //     data: file,
                //     //headers: file.getHeaders(),
                //     // data: JSON.parse(file),
                //     httpsAgent: new https.Agent({ rejectUnauthorized: false })
                // };
                // axios(config)
                //     .then(res => {
                //         console.log(chalk.green("File updated successfully"));
                //         //console.log(file);
                // })
                //     .catch(err => {
                //         //errorHandler(err);
                //         console.error(err);
                // })


                // const config = { headers: { 'Content-Type': 'multipart/form-data; boundary=data.getBoundary() ' } };
                const fd = new FormData();
                fd.append('file',data);


                var config = {
                    method: 'post',
                    url: url,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    formData: {
                        "file": fs.createReadStream(source)
                    },
                    rejectUnauthorized: false
                };

                express.Router.post(url, upload.single(), questionnaire_upd(file));

                // request(config, function (err, data, body) {
                //     if (err) {
                //         console.log(err);
                //     }
                //     else {
                //         console.log(body);
                //     }
                // });

                // axios.post(url, fd, {
                //     headers: {
                //         'Content-Type': 'multipart/form-data'
                //     } 
                // })
                // .then(res => {
                //     console.log(chalk.green("File updated successfully"));
                //     console.log(res);
                // })
                // .catch(err => {
                //     //errorHandler(err);
                //     console.error(err);
                // });
              //console.log(fd); // This will print the contents of the file
            }
          });
        
        console.log(chalk.green(url));
    }
    else {
        console.log(chalk.red('Error: mandatory parameters omitted\n'));
        console.log(chalk.yellow('Mandatory Parameters: \n --source [file]'));
        console.log(chalk.yellow('ex: se2222 questionnaire_upd source\n'));
    }

}