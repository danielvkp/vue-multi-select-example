<template id="">
	<div>
		<my-navbar></my-navbar>
		<my-header></my-header>
		<main>
			<div class="main-container">
				<router-view></router-view>
			</div>
		</main>
	</div>
</template>

<script>
	import Nav from './components/partials/Nav.vue';
	import Header from './components/partials/Header.vue';

	export default {
		components: {
			'my-navbar': Nav,
			'my-header': Header
		},
	}
</script>