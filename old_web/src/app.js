import Vue from 'vue';
import App from './App.vue';


window.axios = require('axios');

new Vue({
    render: h => h(App),
}).$mount('#app');