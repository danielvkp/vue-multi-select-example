<template>
	<div class="row">
		<div class="col s12 m12 l12">
			<h4 class="center-align">Vue Multi-select Example!</h4>
		</div>
		<div class="col s12 m4 l4 offset-m4 offset-l4">
			<categorias></categorias>
		</div>
	</div>
</template>

<script>
	import categorias from './DropDownCategoriesComponent';

	export default {
		name: 'Categories',
		components: {
			categorias
		},
		data() {
			return {}
		},
	}
</script>


<style>
	dd {
		margin: 0;
	}
</style>