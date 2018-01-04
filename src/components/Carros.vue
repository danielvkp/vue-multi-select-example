<template>	
	 <button class="btn" @click="perdirCarro">pedir carro</button>
</template>

<script>
export default {  
   methods:{
   	perdirCarro: function (){
   		this.$emit('perdirCarro');
   	}
   }
}
</script>