import axios from 'axios'

const API_URL = 'http://localhost:8080';

class AuthService {
    login(passcode) {
        return axios.post(API_URL + '/login', {
            passcode: passcode
        })
        .then(response => {
            if (response.data.accessToken != null) {

                //set local storage
            }

            return response.data;
        });
    }
}

export default new AuthService();