
import AuthService from '../services/auth.service.js'

const initialState = {

};

export const auth = {

    namespaced: true,

    state: initialState,

    getters: {

    },

    mutations: {
        loginSuccess(state, payload) {
            console.log(`loginSuccess: recieved token ${payload.accessToken}`);
            //payload.accessToken
            //update state to logged in, also set token
        },
        loginFailed(state) {
            console.log(`loginFailed`);
        }
    },

    actions: {
        login({ commit }, passcode) {
            return AuthService.login(passcode)
            .then(
                data => {
                    commit('loginSuccess', data);
                    return Promise.resolve(data);
                },
                err => {
                    commit('loginFailed');
                    return Promise.reject(err);
                }
            );
        },
    },

}