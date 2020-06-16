import axios from 'axios'

import { API_URL } from '../config.js';

class UserService {

    getGalleryPictures() {

        return axios.get(API_URL + '/gallery', {
            headers: UserService.getAuthToken()
        }).then(response => {
            return response.data;
        });
    }

    getVotingPictures() {
        
        return axios.get(API_URL + '/vote', {
            headers: UserService.getAuthToken()
        }).then(response => {
            return response.data;
        });
    }

    getUserProfile() {

        return axios.get(API_URL + '/user', {
            headers: UserService.getAuthToken()
        }).then(response => {
            return response.data;
        });
    }

    getLeaderboard() {

        return axios.get(API_URL + '/leaderboard', {
            headers: UserService.getAuthToken()
        }).then(response => {
            return response.data;
        });
    }
    
    makeVote(picURL, vote) {
        return axios.post(API_URL + '/vote', {
            pic: picURL,
            verdict: vote
        }, { headers: UserService.getAuthToken() })
        .then(response => {
            return response.data;
        });
    }
    

    static getAuthToken() { //grab accesstoken from localstorage to use when sending authorized requests
        const localData = JSON.parse(localStorage.getItem('localData'));

        if (localData != null && localData.accessToken != null) {
            return { 'x-access-token': localData.accessToken };
        } else {
            return { };
        }
    }

}

export default new UserService();