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
                localStorage.setItem('localData', JSON.stringify({accessToken: response.data.accessToken}));
            }

            return response.data;
        });
    }
    logout() {
        localStorage.removeItem('localData');
    }
}

export default new AuthService();