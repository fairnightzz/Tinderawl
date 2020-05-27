import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Main from './components/Main.vue'
import Leaderboard from './components/Leaderboard.vue'
import Profile from './components/Profile.vue'
import Notfound from './components/Notfound.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
	routes: [
		{ path: '/', component: Main },
		{ path: '/leaderboard', component: Leaderboard },
		{ path: '/profile/:id', component: Profile },
		{ path: '*', component: Notfound}
	],
	mode: 'history',
});

new Vue({

	data: {
		
	},

	computed: {

	},

	router,
	render: h => h(App),

}).$mount('#app');
