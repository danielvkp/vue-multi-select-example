import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';
import VueRouter from 'vue-router';
import store from './store.js';

Vue.use(VueRouter);

new Vue({
	el: '#app',
	router,
	store,
	components: {
		'app': App
	},
	render: h => h(App)
})