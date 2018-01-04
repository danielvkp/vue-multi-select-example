<template>
  
  <div class="row">
  	<div class="col s12 m4 l4">
  		<div class="card-panel" v-for="carro in carros">{{ carro }}</div>
  	</div>
  	<div class="col s12 m4 l4">
  		<mis-carros v-on:perdirCarro="agregarCarro"></mis-carros>
  	</div>
  </div>

</template>

<script>
	
import Carros from './Carros.vue';

export default {
  name: 'Example',
  components:{
  	'mis-carros' : Carros
  },
  data () {
    return {     
      carros: ['toyota', 'ford', 'renault'],
    }
  },
  methods :{
  	agregarCarro : function(){
  		this.carros.push('camion');
  	}
  }
}
</script>