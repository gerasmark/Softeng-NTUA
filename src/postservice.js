import axios from 'axios';
const url = 'http://localhost:9103/intelliq_api/user/';
const url1 = 'http://localhost:9103/intelliq_api/adminpage/';
const url2 = 'http://localhost:9103/intelliq_api/institution/';
const url3 = 'http://localhost:9103/intelliq_api/questionnaire/';
const url4 = 'http://localhost:9103/intelliq_api/answer/';



class postService {
    static getuser(){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                //const data = res.data;
                resolve(res.data);
            } catch (error) {
                reject(error);
            }
        })
    }
    static getadmin(){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url1);
                const data = res.data;
                const names = data.map(doc => doc.name)
                resolve(names);
            } catch (error) {
                reject(error);
            }
        })
    }
    static getsurveys(){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url3);
                const data = res.data;
                const surveys = data.map(doc => ({ name: doc.questionnaireTitle, id: doc._id, questions: doc.questions, questionnaire_id: doc.questionnaireID}));

                resolve(surveys);

            } catch (error) {
                reject(error);
            }
        })
    }
    static getquestions(params){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url3);
                const data = res.data;

                resolve(data.questions);
            } catch (error) {
                reject(error);
            }
        });
    }
    static getinstitution(){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url2);
                const data = res.data;
                const names = data.map(doc => doc.name)
                resolve(names);
            } catch (error) {
                reject(error);
            }
        })
    }
    static insertuser(url, text, callback) {
        return axios.post(url,{text}, callback);
    }
    async postAnswers(surveyQuestionnaireId, answers) {
        try {
            const response = await axios.post(url4, {
                questionnaire_id: this.surveyQuestionnaireId,
                answers: this.answers
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

}
export default postService;