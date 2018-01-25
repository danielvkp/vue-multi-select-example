import VueRouter from 'vue-router';

import Categories from './components/categories/Categories.vue';

const router = new VueRouter({
	routes: [{
			name: 'Categories',
			path: '/categories',
			component: Categories
		},
	]
});

export default router;