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

		<sub-categories :subCategories="sortSubCategories"></sub-categories>
	</div>


</template>



<script>
	import Multiselect from 'vue-multiselect';
	import lodash from 'lodash'
	import Subcategories from './SubcategoriesComponent.vue';

	export default {
		name: 'categorias',
		components: {
			Multiselect,
			'sub-categories': Subcategories
		},
		data() {
			return {
				subCategories: 'soy un mensaje',
				value: [
					{
						id: 2,
						name: "Todos los anuncios",
						parent_id: null,
						code: 99,
						additional: null
					}
                ],
				categories: [{
					"id": 1,
					"name": "Sin clasificar",
					"parent_id": null,
					"code": 0,
					"additional": null
				}, {
					"id": 2,
					"name": "Todos los anuncios",
					"parent_id": null,
					"code": 99,
					"additional": null
				}, {
					"id": 3,
					"name": "Inmobiliaria",
					"parent_id": 0,
					"code": 2,
					"additional": null
				}, {
					"id": 4,
					"name": "Motor",
					"parent_id": 0,
					"code": 3,
					"additional": null
				}, {
					"id": 5,
					"name": "Casa Jard\u00edn",
					"parent_id": 0,
					"code": 4,
					"additional": null
				}, {
					"id": 6,
					"name": "Moda y Belleza",
					"parent_id": 0,
					"code": 5,
					"additional": null
				}, {
					"id": 7,
					"name": "Electr\u00f3nica",
					"parent_id": 0,
					"code": 6,
					"additional": null
				}, {
					"id": 8,
					"name": "Ocio y Deporte",
					"parent_id": 0,
					"code": 7,
					"additional": null
				}, {
					"id": 9,
					"name": "Animales",
					"parent_id": 0,
					"code": 8,
					"additional": null
				}, {
					"id": 10,
					"name": "Trabajo",
					"parent_id": 0,
					"code": 9,
					"additional": null
				}, {
					"id": 11,
					"name": "Negocios",
					"parent_id": 0,
					"code": 10,
					"additional": null
				}, {
					"id": 12,
					"name": "Libros y Formaci\u00f3n",
					"parent_id": 0,
					"code": 11,
					"additional": null
				}, {
					"id": 13,
					"name": "Servicios",
					"parent_id": 0,
					"code": 12,
					"additional": null
				}, {
					"id": 14,
					"name": "Bebes",
					"parent_id": 0,
					"code": 13,
					"additional": null
				}, {
					"id": 15,
					"name": "Comunidad",
					"parent_id": 0,
					"code": 14,
					"additional": null
				}, {
					"id": 16,
					"name": "Vacaciones",
					"parent_id": 2,
					"code": 201,
					"additional": null
				}, {
					"id": 17,
					"name": "Casa rurales",
					"parent_id": 2,
					"code": 202,
					"additional": null
				}, {
					"id": 18,
					"name": "Garajes y trasteros",
					"parent_id": 2,
					"code": 203,
					"additional": null
				}, {
					"id": 19,
					"name": "Locales de negocios",
					"parent_id": 2,
					"code": 204,
					"additional": null
				}, {
					"id": 20,
					"name": "Pisos",
					"parent_id": 2,
					"code": 205,
					"additional": null
				}, {
					"id": 21,
					"name": "Piso compartido",
					"parent_id": 2,
					"code": 206,
					"additional": null
				}, {
					"id": 22,
					"name": "Terrenos y fincas",
					"parent_id": 2,
					"code": 207,
					"additional": null
				}, {
					"id": 23,
					"name": "Unifamiliar",
					"parent_id": 2,
					"code": 208,
					"additional": null
				}, {
					"id": 24,
					"name": "Accesorios coches",
					"parent_id": 3,
					"code": 301,
					"additional": null
				}, {
					"id": 25,
					"name": "Accesorios motos",
					"parent_id": 3,
					"code": 302,
					"additional": null
				}, {
					"id": 26,
					"name": "Autocaravanas",
					"parent_id": 3,
					"code": 303,
					"additional": null
				}, {
					"id": 27,
					"name": "Coches",
					"parent_id": 3,
					"code": 304,
					"additional": null
				}, {
					"id": 28,
					"name": "De \u00e9poca",
					"parent_id": 3,
					"code": 305,
					"additional": null
				}, {
					"id": 29,
					"name": "Sin carnet",
					"parent_id": 3,
					"code": 306,
					"additional": null
				}, {
					"id": 30,
					"name": "Motos",
					"parent_id": 3,
					"code": 307,
					"additional": null
				}, {
					"id": 31,
					"name": "Quads, buggies",
					"parent_id": 3,
					"code": 308,
					"additional": null
				}, {
					"id": 32,
					"name": "Veh\u00edculos industriales",
					"parent_id": 3,
					"code": 309,
					"additional": null
				}, {
					"id": 33,
					"name": "N\u00e1utica",
					"parent_id": 3,
					"code": 310,
					"additional": null
				}, {
					"id": 34,
					"name": "Arte y antig\u00fcedades",
					"parent_id": 4,
					"code": 401,
					"additional": null
				}, {
					"id": 35,
					"name": "Bricolaje",
					"parent_id": 4,
					"code": 402,
					"additional": null
				}, {
					"id": 36,
					"name": "Cocina y ba\u00f1o",
					"parent_id": 4,
					"code": 403,
					"additional": null
				}, {
					"id": 37,
					"name": "Decoraci\u00f3n",
					"parent_id": 4,
					"code": 404,
					"additional": null
				}, {
					"id": 38,
					"name": "Electrodom\u00e9sticos",
					"parent_id": 4,
					"code": 405,
					"additional": null
				}, {
					"id": 39,
					"name": "Jardiner\u00eda",
					"parent_id": 4,
					"code": 406,
					"additional": null
				}, {
					"id": 40,
					"name": "Muebles",
					"parent_id": 4,
					"code": 407,
					"additional": null
				}, {
					"id": 41,
					"name": "Ropa del hogar",
					"parent_id": 4,
					"code": 408,
					"additional": null
				}, {
					"id": 42,
					"name": "Vajilla y menaje",
					"parent_id": 4,
					"code": 409,
					"additional": null
				}, {
					"id": 43,
					"name": "Relojes y joyas",
					"parent_id": 5,
					"code": 501,
					"additional": null
				}, {
					"id": 44,
					"name": "Ropa y complementos",
					"parent_id": 5,
					"code": 502,
					"additional": null
				}, {
					"id": 45,
					"name": "Salud y est\u00e9tica",
					"parent_id": 5,
					"code": 503,
					"additional": null
				}, {
					"id": 46,
					"name": "Accesorios",
					"parent_id": 6,
					"code": 601,
					"additional": null
				}, {
					"id": 47,
					"name": "Consolas",
					"parent_id": 6,
					"code": 602,
					"additional": null
				}, {
					"id": 48,
					"name": "Fotograf\u00eda",
					"parent_id": 6,
					"code": 603,
					"additional": null
				}, {
					"id": 49,
					"name": "Imagen y sonido",
					"parent_id": 6,
					"code": 604,
					"additional": null
				}, {
					"id": 50,
					"name": "Telefon\u00eda",
					"parent_id": 6,
					"code": 605,
					"additional": null
				}, {
					"id": 51,
					"name": "Aficiones",
					"parent_id": 7,
					"code": 701,
					"additional": null
				}, {
					"id": 52,
					"name": "Bebida y comida",
					"parent_id": 7,
					"code": 702,
					"additional": null
				}, {
					"id": 53,
					"name": "Bicicletas",
					"parent_id": 7,
					"code": 703,
					"additional": null
				}, {
					"id": 54,
					"name": "Camping",
					"parent_id": 7,
					"code": 704,
					"additional": null
				}, {
					"id": 55,
					"name": "Coleccionismo",
					"parent_id": 7,
					"code": 705,
					"additional": null
				}, {
					"id": 56,
					"name": "Deportes",
					"parent_id": 7,
					"code": 706,
					"additional": null
				}, {
					"id": 57,
					"name": "Instrumentos de m\u00fasica",
					"parent_id": 7,
					"code": 707,
					"additional": null
				}, {
					"id": 58,
					"name": "Juegos de mesa",
					"parent_id": 7,
					"code": 708,
					"additional": null
				}, {
					"id": 59,
					"name": "Libros y c\u00f3mics",
					"parent_id": 7,
					"code": 709,
					"additional": null
				}, {
					"id": 60,
					"name": "M\u00fasica, pel\u00eds, series",
					"parent_id": 7,
					"code": 710,
					"additional": null
				}, {
					"id": 61,
					"name": "Accesorios",
					"parent_id": 8,
					"code": 801,
					"additional": null
				}, {
					"id": 62,
					"name": "Caballos",
					"parent_id": 8,
					"code": 802,
					"additional": null
				}, {
					"id": 63,
					"name": "Gatos",
					"parent_id": 8,
					"code": 803,
					"additional": null
				}, {
					"id": 64,
					"name": "P\u00e1jaros",
					"parent_id": 8,
					"code": 804,
					"additional": null
				}, {
					"id": 65,
					"name": "Peces",
					"parent_id": 8,
					"code": 805,
					"additional": null
				}, {
					"id": 66,
					"name": "Perros",
					"parent_id": 8,
					"code": 806,
					"additional": null
				}, {
					"id": 67,
					"name": "Reptiles",
					"parent_id": 8,
					"code": 807,
					"additional": null
				}, {
					"id": 68,
					"name": "Roedores",
					"parent_id": 8,
					"code": 808,
					"additional": null
				}, {
					"id": 69,
					"name": "Otras mascotas",
					"parent_id": 8,
					"code": 809,
					"additional": null
				}, {
					"id": 70,
					"name": "Abogados",
					"parent_id": 9,
					"code": 901,
					"additional": null
				}, {
					"id": 71,
					"name": "Administraci\u00f3n",
					"parent_id": 9,
					"code": 902,
					"additional": null
				}, {
					"id": 72,
					"name": "Arquitectos",
					"parent_id": 9,
					"code": 903,
					"additional": null
				}, {
					"id": 73,
					"name": "Artes y Dise\u00f1o",
					"parent_id": 9,
					"code": 904,
					"additional": null
				}, {
					"id": 74,
					"name": "Hosteler\u00eda",
					"parent_id": 9,
					"code": 905,
					"additional": null
				}, {
					"id": 75,
					"name": "Comerciales",
					"parent_id": 9,
					"code": 906,
					"additional": null
				}, {
					"id": 76,
					"name": "Com. independientes",
					"parent_id": 9,
					"code": 907,
					"additional": null
				}, {
					"id": 77,
					"name": "Construcci\u00f3n",
					"parent_id": 9,
					"code": 908,
					"additional": null
				}, {
					"id": 78,
					"name": "Consultores",
					"parent_id": 9,
					"code": 909,
					"additional": null
				}, {
					"id": 79,
					"name": "Contables",
					"parent_id": 9,
					"code": 910,
					"additional": null
				}, {
					"id": 80,
					"name": "Control de calidad",
					"parent_id": 9,
					"code": 911,
					"additional": null
				}, {
					"id": 81,
					"name": "Directivos",
					"parent_id": 9,
					"code": 912,
					"additional": null
				}, {
					"id": 82,
					"name": "Educaci\u00f3n",
					"parent_id": 9,
					"code": 913,
					"additional": null
				}, {
					"id": 83,
					"name": "Finanzas",
					"parent_id": 9,
					"code": 914,
					"additional": null
				}, {
					"id": 84,
					"name": "Infom\u00e1ticos",
					"parent_id": 9,
					"code": 915,
					"additional": null
				}, {
					"id": 85,
					"name": "Ingenieros",
					"parent_id": 9,
					"code": 916,
					"additional": null
				}, {
					"id": 86,
					"name": "Investigadores",
					"parent_id": 9,
					"code": 917,
					"additional": null
				}, {
					"id": 87,
					"name": "Marketing",
					"parent_id": 9,
					"code": 918,
					"additional": null
				}, {
					"id": 88,
					"name": "Mensajeros",
					"parent_id": 9,
					"code": 919,
					"additional": null
				}, {
					"id": 89,
					"name": "Oficios",
					"parent_id": 9,
					"code": 920,
					"additional": null
				}, {
					"id": 90,
					"name": "Periodistas",
					"parent_id": 9,
					"code": 921,
					"additional": null
				}, {
					"id": 91,
					"name": "Publicidad",
					"parent_id": 9,
					"code": 922,
					"additional": null
				}, {
					"id": 92,
					"name": "Recursos Humanos",
					"parent_id": 9,
					"code": 923,
					"additional": null
				}, {
					"id": 93,
					"name": "Sanidad",
					"parent_id": 9,
					"code": 924,
					"additional": null
				}, {
					"id": 94,
					"name": "Servicio dom\u00e9stico",
					"parent_id": 9,
					"code": 925,
					"additional": null
				}, {
					"id": 95,
					"name": "Servicios Sociales",
					"parent_id": 9,
					"code": 926,
					"additional": null
				}, {
					"id": 96,
					"name": "Traductores",
					"parent_id": 9,
					"code": 927,
					"additional": null
				}, {
					"id": 97,
					"name": "Transportistas",
					"parent_id": 9,
					"code": 928,
					"additional": null
				}, {
					"id": 98,
					"name": "Turismo",
					"parent_id": 9,
					"code": 929,
					"additional": null
				}, {
					"id": 99,
					"name": "Vigilantes y porteros",
					"parent_id": 9,
					"code": 930,
					"additional": null
				}, {
					"id": 100,
					"name": "Otros oficios",
					"parent_id": 9,
					"code": 931,
					"additional": null
				}, {
					"id": 101,
					"name": "Alquiler de negocios",
					"parent_id": 10,
					"code": 1001,
					"additional": null
				}, {
					"id": 102,
					"name": "Representantes ind.",
					"parent_id": 10,
					"code": 1002,
					"additional": null
				}, {
					"id": 103,
					"name": "Compra-Venta de Oro",
					"parent_id": 10,
					"code": 1003,
					"additional": null
				}, {
					"id": 104,
					"name": "Financaci\u00f3n",
					"parent_id": 10,
					"code": 1004,
					"additional": null
				}, {
					"id": 105,
					"name": "Franquicias",
					"parent_id": 10,
					"code": 1005,
					"additional": null
				}, {
					"id": 106,
					"name": "Maquinaria",
					"parent_id": 10,
					"code": 1006,
					"additional": null
				}, {
					"id": 107,
					"name": "Mobiliario",
					"parent_id": 10,
					"code": 1007,
					"additional": null
				}, {
					"id": 108,
					"name": "Oportunidades",
					"parent_id": 10,
					"code": 1008,
					"additional": null
				}, {
					"id": 109,
					"name": "Productos y stocks",
					"parent_id": 10,
					"code": 1009,
					"additional": null
				}, {
					"id": 110,
					"name": "Traspasos",
					"parent_id": 10,
					"code": 1010,
					"additional": null
				}, {
					"id": 111,
					"name": "Venta de empresa",
					"parent_id": 10,
					"code": 1011,
					"additional": null
				}, {
					"id": 112,
					"name": "Autoescuelas",
					"parent_id": 11,
					"code": 1101,
					"additional": null
				}, {
					"id": 113,
					"name": "Clases Particulares",
					"parent_id": 11,
					"code": 1102,
					"additional": null
				}, {
					"id": 114,
					"name": "Cursos",
					"parent_id": 11,
					"code": 1103,
					"additional": null
				}, {
					"id": 115,
					"name": "Idiomas",
					"parent_id": 11,
					"code": 1104,
					"additional": null
				}, {
					"id": 116,
					"name": "Libros y m\u00e1s",
					"parent_id": 11,
					"code": 1105,
					"additional": null
				}, {
					"id": 117,
					"name": "Master",
					"parent_id": 11,
					"code": 1106,
					"additional": null
				}, {
					"id": 118,
					"name": "Oposiciones",
					"parent_id": 11,
					"code": 1107,
					"additional": null
				}, {
					"id": 119,
					"name": "Para bicicletas",
					"parent_id": 12,
					"code": 1201,
					"additional": null
				}, {
					"id": 120,
					"name": "Para el hogar",
					"parent_id": 12,
					"code": 1202,
					"additional": null
				}, {
					"id": 121,
					"name": "Para el motor",
					"parent_id": 12,
					"code": 1203,
					"additional": null
				}, {
					"id": 122,
					"name": "Para empresas",
					"parent_id": 12,
					"code": 1204,
					"additional": null
				}, {
					"id": 123,
					"name": "Para mascotas",
					"parent_id": 12,
					"code": 1205,
					"additional": null
				}, {
					"id": 124,
					"name": "Para personas",
					"parent_id": 12,
					"code": 1206,
					"additional": null
				}, {
					"id": 125,
					"name": "Reparaci\u00f3n Electr\u00f3nica",
					"parent_id": 12,
					"code": 1207,
					"additional": null
				}, {
					"id": 126,
					"name": "Accesorios bebe",
					"parent_id": 13,
					"code": 1301,
					"additional": null
				}, {
					"id": 127,
					"name": "Ba\u00f1era y cambiadores",
					"parent_id": 13,
					"code": 1302,
					"additional": null
				}, {
					"id": 128,
					"name": "Coches de bebe",
					"parent_id": 13,
					"code": 1303,
					"additional": null
				}, {
					"id": 129,
					"name": "Cunas",
					"parent_id": 13,
					"code": 1304,
					"additional": null
				}, {
					"id": 130,
					"name": "Hamacas y columpios",
					"parent_id": 13,
					"code": 1305,
					"additional": null
				}, {
					"id": 131,
					"name": "Juguetes bebe",
					"parent_id": 13,
					"code": 1306,
					"additional": null
				}, {
					"id": 132,
					"name": "Mobiliario infantil",
					"parent_id": 13,
					"code": 1307,
					"additional": null
				}, {
					"id": 133,
					"name": "Mochilas y portabebes",
					"parent_id": 13,
					"code": 1308,
					"additional": null
				}, {
					"id": 134,
					"name": "Moda ni\u00f1a",
					"parent_id": 13,
					"code": 1309,
					"additional": null
				}, {
					"id": 135,
					"name": "Moda ni\u00f1o",
					"parent_id": 13,
					"code": 1310,
					"additional": null
				}, {
					"id": 136,
					"name": "Parques",
					"parent_id": 13,
					"code": 1311,
					"additional": null
				}, {
					"id": 137,
					"name": "Tronas",
					"parent_id": 13,
					"code": 1312,
					"additional": null
				}, {
					"id": 138,
					"name": "Compartir coche",
					"parent_id": 14,
					"code": 1401,
					"additional": null
				}, {
					"id": 139,
					"name": "Compartir parking",
					"parent_id": 14,
					"code": 1402,
					"additional": null
				}, {
					"id": 140,
					"name": "Coworking",
					"parent_id": 14,
					"code": 1403,
					"additional": null
				}, {
					"id": 141,
					"name": "Intercambio de Idiomas",
					"parent_id": 14,
					"code": 1404,
					"additional": null
				}, {
					"id": 142,
					"name": "Intercambio de Vacaciones",
					"parent_id": 14,
					"code": 1405,
					"additional": null
				}, {
					"id": 143,
					"name": "Retorno de Mercanc\u00edas",
					"parent_id": 14,
					"code": 1406,
					"additional": null
				}, {
					"id": 144,
					"name": "Trueque",
					"parent_id": 14,
					"code": 1407,
					"additional": null
				}],
				categorySelected: 2
			}
		},

		methods: {
			dispatchActionCategory(actionName) {
				var id = actionName.id;
				this.categorySelected = id;
				console.log("Ha seleccionado la categoría " + this.categorySelected);
				var subCategories = [];
				subCategories = this.sortSubCategories;
				return subCategories
			}
		},

		computed: {
			sortMainCategories: function () {
				var categories = this.categories.filter(c => (c.parent_id === 0 || c.code === 99));
				return _.orderBy(categories, 'name')
			},
			sortSubCategories: function () {
				return this.categories.filter(c => c.parent_id === this.categorySelected)
				return _.orderBy(subCategories, 'name')
			}
		},
		mounted: function () {
			console.log('DropDownCategories mounted.')
		}
	}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>