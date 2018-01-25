<template>
	<header>
		<ul class="dropdown-content" id="user_dropdown">
			<li><a class="indigo-text" href="#">Profile</a></li>
			<li><a class="indigo-text">Logout</a></li>
		</ul>

		<nav style="background-color:#13af6a;" role="navigation">
			<div class="nav-wrapper">
				<a data-activates="slide-out" class="button-collapse show-on-"><i style="font-size:35px;" class="material-icons left">menu</i></a>
				<!-- <router-link to="/" data-activates="slide-out" class="button-collapse show-on-"><img style="margin-top: 7px; margin-left: 5px;" height="40" src="{{ asset('assets/img/triangulo.png') }}" /></router-link>-->
				<ul class="right hide-on-med-and-down">
					<li>
						<a class='right dropdown-button' href='' data-activates='user_dropdown'><i class=' material-icons'>account_circle</i></a>
					</li>
				</ul>
				<a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
			</div>
		</nav>
	</header>
</template>

<script>
	export default {

	}
</script>