<template>
  <div>  
   
   <nav>
    <div class="nav-wrapper indigo accent-3">     
      <ul class="left hide-on-med-and-down">
        <li><router-link to="exampledos">Exampledos</router-link></li>
        <li><router-link to="example">Example</router-link> </li>        
      </ul>
    </div>
  </nav>

    <div class="container">
    	<router-view></router-view>
    </div> 

  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>