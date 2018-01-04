<template>
	<div class="row">
		<div class="col s4 m4 l4">
			<categorias></categorias>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import categorias from './DropDownCategoriesComponent';

	export default {
		name: 'Exampledos',
		components: {
			categorias
		},
		data() {
			return {

			}
		},
		mounted: function () {

		},
		methods: {

		},
		computed: {

		}
	}
</script>