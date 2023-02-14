const request = require('supertest');
const chai = require('chai')
const expect = chai.expect;
const exec = require("child_process");
//const express = require("express");
//const adminController = require('../api-backend/controllers/adminServer');
const app = require('../app');
const axios = require('axios');
const https = require('https');


describe('Questionnaire Endpoint', () => {
    it('Should return status code 200', (done) => {
        request(app)
        .get('/intelliq_api/questionnaire/QQ001/')
        .end((err, res) => {
            questionnaire = res;
            expect(res.status).to.eq(200);
            done();
        })
    });
    it('Should return an object', () => {
        expect(questionnaire).to.be.an('object');
        //done();
    });
    it('Should return questionnaire with ID QQ001', () => {
        const data = questionnaire.body;
        const data1 = data[0].questionnaireID;
        expect(data1).to.eq('QQ001');
        //done();
    });
});

describe('Question Endpoint', () => {
    it('Should return status code 200', (done) => {
        request(app)
        .get('/intelliq_api/question/QQ001/P01')
        .end((err, res) => {
            question = res;
            expect(res.status).to.eq(200);
            done();
        })
    });
    it('Should return an object', () => {
        expect(question).to.be.an('object');
        //done();
    });
    it('Should return question with ID P01 from QQ001', () => {
        const data = question.body.qID;
        //const data1 = data[0].questions;
        expect(data).to.eq('P01');
        //done();
    });
});

describe('Getquestionanswers Endpoint', () => {
    it('Should return status code 200', (done) => {
        request(app)
        .get('/intelliq_api/getquestionanswers/QQ001/P01')
        .end((err, res) => {
            questionanswers = res;
            expect(res.status).to.eq(200);
            done();
        })
    });
    it('Should return an object', () => {
        expect(questionanswers).to.be.an('object');
        //done();
    });
    it('Should return answer P01A1 for question P01 from Q001', () => {
        const data = questionanswers.body.answer;
        //const data1 = data[0].questions;
        expect(data[0].ans).to.eq('P01A1');
        //done();
    });
});

describe('Getsessionanswers Endpoint', () => {
    it('Should return status code 200', (done) => {
        request(app)
        .get('/intelliq_api/getsessionanswers/QQ000/1111')
        .end((err, res) => {
            sessionanswers = res;
            expect(res.status).to.eq(200);
            done();
        })
    });
    it('Should return an object', () => {
        expect(sessionanswers).to.be.an('object');
        //done();
    });
    it('Should return object with answers for session 1111 from Q000', () => {
        const data = sessionanswers.body;
        const data1 = data[0]
        //const data1 = data[0].questions;
        expect(data1).to.have.property('questionnaireID');
        expect(data1).to.have.property('answers');
        expect(data1).to.have.property('session');
        //done();
    });
});

describe('Healthcheck Endpoint', () => {
    it("Should return status code 200", (done) => {
        request(app)
        .get('/intelliq_api/admin/healthcheck')
        .end((err, res) => {
            healthcheck = res.body;
            //expect(healthcheck.body).to.be.an('object');
            expect(res.status).to.eq(200);
            done();
        })
    });
    it('Should return an object', (done) => {
        expect(healthcheck).to.be.an('object');
        //expect(healthcheck.status).to.eq(200);
        done();
    });
    it('Should return status: "OK"', (done) => {
        expect(healthcheck.status).to.eq('OK');
        //expect(healthcheck.status).to.eq(200);
        done();
    });
});



// describe("healthcheck", () => {
//     it("should print the correct output", async () => {
//         var response = https.get('https://localhost:9103/intelliq_api/admin/healthcheck');

//         chai.expect(response).to.have.property("status");
//         //chai.expect(JSON.parse(response).status).to.equal("OK");
//     });
// });

// describe('hc', () => {
//     it('hc', async () => {
//         var config = {
//             method: 'get',
//             url: 'https://localhost:9103/intelliq_api/admin/healthcheck',
//             httpsAgent: new https.Agent({ rejectUnauthorized: false })
//         };
//         const res = await axios(config);
//         expect(res.status).to.eq(200);
//     });
// });
    // it('Should return an object', () => {
    //     expect(res.body).to.be.an('object');
    // })
  //});

//   var config = {
//     method: 'get',
//     url: url,
//     httpsAgent: new https.Agent({ rejectUnauthorized: false })
// };
// axios(config)
//     .then(res => {
//        console.dir(res.data,{depth:null})
// })
//     .catch(err => {
//         errorHandler(err);
//         //console.log(err);
// })


// describe('Healthcheck Endpoint', () => {
//     it('Should return status code 200', (done) => {
//         adminController.healthCheck() => {
//             expect(res.status).to.equal(200);
//             done();
//         }
//     //     .get('/healthcheck')
//     //     .end((err, res) => {
//     //         healthcheck = res.body;
//     //         expect(res.status).to.eq(200);
//     //         done()
//     //     })
//     // })
//     // it('Should return an object', () => {
//     //     expect(healthcheck).to.be.an('object');
//     // })
//     // it('Should return "status": "OK"', () => {
//     //     expect(healthcheck.status).to.eq("OK");
//     // })
// })

// describe('Healthcheck Endpoint', () => {
//   it('Should return status code 200', (done) => {
//     //const inputParam = 'example';
//     adminController.healthCheck((err, res) => {
//       expect(res.status).to.equal(200);
//       //expect(res.body).to.deep.equal({ key: 'value' });
//       done();
//     });
//   });
// });