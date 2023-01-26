import axios from 'axios';
const url = 'http://localhost:5000/post/user/';

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
    static insertuser(text) {
        return axios.post(url,{text});
    }

}
export default postservice;