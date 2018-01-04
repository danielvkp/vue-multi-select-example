import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})