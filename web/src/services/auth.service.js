import axios from 'axios'

import { API_URL } from '../config.js';

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