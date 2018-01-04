<template>
	<div>
		<dl id="subcategorias">
			<dt>
				<label class="control-label">Sub Categorias</label>
			</dt>
			<dd>
				<multiselect :options="subCategories" track-by="id" label="name" selectLabel="Click para seleccionar" deselectLabel="Click para eliminar" :reset-after="false" @select="dispatchActionSubCategory"></multiselect>
			</dd>
		</dl>	
		
	</div>

</template>



<script>
	import Multiselect from 'vue-multiselect';	

	export default {
		name: 'Subcategories',
		props: ['subCategories'],
		components: {
			Multiselect
		},
		data() {
			return {				
				categories: [],				
				categorySelected: 2
			}
		},

		methods: {
			dispatchActionSubCategory(actionName) {
				
			}
		},

		computed: {
			
		},
		mounted: function () {
			console.log('SubCategories mounted.')			
		}
	}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>