import axios from 'axios';
const url = 'http://localhost:3000/post/user/';
const url1 = 'http://localhost:3000/post/admin/';

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
    static insertuser(text) {
        return axios.post(url,{text});
    }

}
export default postService;