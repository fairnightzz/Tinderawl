//import axios from 'axios'

class UserService {

    /*
    makeVote(pic, vote) {
        axios.get()
    }
    */

    getAuthToken() { //grab accesstoken from localstorage to use when sending authorized requests
        const localData = JSON.parse(localStorage.getItem('localData'));

        if (localData != null && localData.accessToken != null) {
            return { 'x-access-token': localData.accessToken };
        } else {
            return { };
        }
    }

}

export default new UserService();