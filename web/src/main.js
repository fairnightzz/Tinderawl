import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from './store/store.js'
import { BootstrapVue } from 'bootstrap-vue';
import VueTippy, { TippyComponent } from 'vue-tippy'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFire, faMedal, faPoll, faSignOutAlt, faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import Login from './pages/Login.vue'
import Main from './pages/Main.vue'
import Vote from './pages/Vote.vue'
import Gallery from './pages/Gallery.vue'
import Leaderboard from './pages/Leaderboard.vue'
import Profile from './pages/Profile.vue'
import Notfound from './pages/Notfound.vue'

//styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.use(VueTippy);
Vue.component('tippy', TippyComponent);

library.add(faFire, faMedal, faPoll, faSignOutAlt, faImages);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

const router = new VueRouter({
	routes: [
		{ path: '/', component: Main },
		{ path: '/login', component: Login },
		{ path: '/vote', component: Vote },
		{ path: '/gallery', component: Gallery },
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
	store,
	render: h => h(App),

}).$mount('#app');
