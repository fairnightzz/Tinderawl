import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login.vue'
import Main from '../pages/Main.vue'
import Vote from '../pages/Vote.vue'
import Gallery from '../pages/Gallery.vue'
import Leaderboard from '../pages/Leaderboard.vue'
import Profile from '../pages/Profile.vue'
import Notfound from '../pages/Notfound.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
	routes: [
		{ path: '/main', component: Main },
		{ path: '/login', component: Login },
		{ path: '/vote', component: Vote },
		{ path: '/liked', component: Gallery },
		{ path: '/leaderboard', component: Leaderboard },
		{ path: '/profile/:id', component: Profile },
		{ path: '*', component: Notfound}
	],
	mode: 'history',
});