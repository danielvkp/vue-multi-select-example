<template>
	<ul id="slide-out" class="side-nav fixed z-depth-2">

		<li class="center no-padding">

			<div class="white-text" style="background-color:#35495e; height: 180px;">
				<div class="row">
					<img style="margin-top: 5%;" width="100" height="100" :src="'src/assets/img/user.jpg'" class="circle" />

					<div>
						<p style="margin-top: -5%;"> User </p>
					</div>

				</div>
			</div>

		</li>

		<ul class="nav-items">
			<li>
				<router-link to="/"><i class="small material-icons">home</i><b>Home</b></router-link>
			</li>
			<li>
				<router-link to="/categories"><i class="small material-icons">assignment</i><b>Categories</b></router-link>
			</li>
		</ul>

	</ul>
</template>

<script>
	export default {

	}
</script>