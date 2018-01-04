import VueRouter from 'vue-router';

import Example from './components/Example.vue';
import Exampledos from './components/Exampledos.vue';
import Layout from './components/Layout.vue';

const router = new VueRouter({
	routes: [
		{
			name: 'Exampledos',
			path: '/exampledos',
			component: Exampledos
  },
		{
			name: 'Example',
			path: '/example',
			component: Example
  },
		{
			name: 'Layout',
			path: '/layout',
			component: Layout
  },
  ]

});

export default router;