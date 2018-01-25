<template>
	<div>
		<dl id="categories">
			<dt>
				<label class="control-label">CATEGORÍAS</label>
			</dt>
			<dd>
				<multiselect v-model="value" :options="sortMainCategories" track-by="id" label="name" selectLabel="Click para seleccionar" deselectLabel="Click para eliminar" :reset-after="false" @select="dispatchActionCategory"></multiselect>
			</dd>
		</dl>
		<sub-categories v-if="showSubCategory" :subCategories="sortSubCategories"></sub-categories>
	</div>
</template>

<script>
	import Multiselect from 'vue-multiselect';
	import Subcategories from './DropDownSubcategoriesComponent.vue';

	export default {
		name: 'categorias',
		components: {
			Multiselect,
			'sub-categories': Subcategories
		},
		data() {
			return {
				value: [
					{
						id: 2,
						name: "Todos los anuncios",
						parent_id: null,
						code: 99,
						additional: null
					}
                ],
				showSubCategory: false
			}
		},

		methods: {
			dispatchActionCategory(actionName) {
				this.showSubCategory = (actionName.id == 2) ? false : true;
			}
		},

		computed: {
			sortMainCategories: function () {
				return this.categories.filter(c => (c.parent_id === 0 || c.code === 99));
			},
			sortSubCategories: function () {
				return this.categories.filter(c => c.parent_id === this.value.code)
			},
			categories: function () {
				return this.$store.getters.categories;
			}
		},
	}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>