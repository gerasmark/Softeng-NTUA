import axios from 'axios'
export const BASE_URL = 'http://localhost:3000/' ;

var request = {
    loginUser(loginUserObj, loginCallBack){

        axios.post(BASE_URL, loginUserObj)
                .then((response => {
                    loginCallBack(response.data)
                }))
                .catch((error =>{
                    console.log(error);
                }))

    }
}

export default request

