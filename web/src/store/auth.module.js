
import AuthService from '../services/auth.service.js'

const localData = JSON.parse(localStorage.getItem('localData'));

const initialState = (localData != null)
    ? { accessToken: localData.accessToken, loggedIn: true }
    : { accessToken: null, loggedIn: false };

export const auth = {

    namespaced: true,

    state: initialState,

    mutations: {
        loginSuccess(state, payload) {
            state.accessToken = payload.accessToken;
            state.loggedIn = true;
            //console.log(`loginSuccess: recieved token ${payload.accessToken}`);

        },
        loginFailed(state) {
            state.accessToken = null;
            state.loggedIn = false;
            //console.log(`loginFailed`);
        },
        logout(state) {
            state.accessToken = null;
            state.loggedIn = false;
            //console.log(`Logged Out`);
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
        logout({ commit }) {
            AuthService.logout();
            commit('logout');
        }
    },

}