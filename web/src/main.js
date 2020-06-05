import Vue from 'vue'
import { router } from './router/router.js'
import { store } from './store/store.js'
import { BootstrapVue } from 'bootstrap-vue'
import VueTippy, { TippyComponent } from 'vue-tippy'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFire, faMedal, faPoll, faSignOutAlt, faImages, faTimes, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'

//styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.use(VueTippy);
Vue.component('tippy', TippyComponent);

library.add(faFire, faMedal, faPoll, faSignOutAlt, faImages, faTimes, faHeart);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;


new Vue({

	data: {
		
	},

	computed: {

	},

	router,
	store,
	render: h => h(App),

}).$mount('#app');
