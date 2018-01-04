<template>

	<div class="container">

		<div class="row">
			<div style="margin-top: 2rem;" class="col s12 m8 l8 offset-m2 offset-l2">
				<div class="row cardapp">
					<div class="col s4 m4 l4 carditem">
						<i id="item1" class="medium material-icons">insert_chart</i>
						</br>
						<p>Item 1</p>
					</div>
					<div class="col s4 m4 l4">
						<i id="item2" class="medium material-icons">brightness_medium</i>
						</br>
						<p>Item 2</p>
					</div>
					<div class="col s4 m4 l4">
						<i id="item3" class="medium material-icons">local_see</i>
						</br>
						<p>Item 3</p>
					</div>
					<div class="col s4 m4 l4">
						<i id="item4" class="medium material-icons">insert_chart</i>
					</div>
					<div class="col s4 m4 l4">
						<i id="item5" class="medium material-icons">brightness_medium</i>
					</div>
					<div class="col s4 m4 l4">
						<i id="item6" class="medium material-icons">local_see</i>
					</div>
					<div class="col s4 m4 l4">
						<i id="item7" class="medium material-icons">insert_chart</i>
					</div>
					<div class="col s4 m4 l4">
						<i id="item8" class="medium material-icons">brightness_medium</i>
					</div>
					<div class="col s4 m4 l4">
						<i id="item9" class="medium material-icons">local_see</i>
					</div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	export default {

	}
</script>


<style>
	.row .col {
		padding: 0.75rem;
	}
	
	.cardapp {
		background-color: #fbfbfb;
		text-align: center;
	}
	
	i {
		background-color: white;
		padding: 0.9rem;
		border-radius: 250%;
		-webkit-box-shadow: 0px 2px 62px -17px rgba(168, 166, 168, 1);
		-moz-box-shadow: 0px 2px 62px -17px rgba(168, 166, 168, 1);
		box-shadow: 0px 2px 62px -17px rgba(168, 166, 168, 1);
	}
	
	p {
		margin: 0.6rem;
		font-size: 1.2rem;
		color: #868686;
	}
	
	.carditem {
		border-radius: 8px;
		transition: all 0.8s;
	}
	
	.carditem:hover {
		background-color: #ebebeb;
	}
	
	#item1 {
		background: rgba(255, 217, 25, 1);
		background: -moz-linear-gradient(left, rgba(255, 217, 25, 1) 0%, rgba(247, 164, 40, 1) 100%);
		background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255, 217, 25, 1)), color-stop(100%, rgba(247, 164, 40, 1)));
		background: -webkit-linear-gradient(left, rgba(255, 217, 25, 1) 0%, rgba(247, 164, 40, 1) 100%);
		background: -o-linear-gradient(left, rgba(255, 217, 25, 1) 0%, rgba(247, 164, 40, 1) 100%);
		background: -ms-linear-gradient(left, rgba(255, 217, 25, 1) 0%, rgba(247, 164, 40, 1) 100%);
		background: linear-gradient(to right, rgba(255, 217, 25, 1) 0%, rgba(247, 164, 40, 1) 100%);
		filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#ffd919', endColorstr='#f7a428', GradientType=1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	
	#item2 {
		background: rgba(0, 187, 255, 1);
		background: -moz-linear-gradient(45deg, rgba(0, 187, 255, 1) 0%, rgba(173, 0, 247, 1) 100%);
		background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(0, 187, 255, 1)), color-stop(100%, rgba(173, 0, 247, 1)));
		background: -webkit-linear-gradient(45deg, rgba(0, 187, 255, 1) 0%, rgba(173, 0, 247, 1) 100%);
		background: -o-linear-gradient(45deg, rgba(0, 187, 255, 1) 0%, rgba(173, 0, 247, 1) 100%);
		background: -ms-linear-gradient(45deg, rgba(0, 187, 255, 1) 0%, rgba(173, 0, 247, 1) 100%);
		background: linear-gradient(45deg, rgba(0, 187, 255, 1) 0%, rgba(173, 0, 247, 1) 100%);
		filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#00bbff', endColorstr='#ad00f7', GradientType=1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	
	#item3 {
		background: rgba(25, 194, 110, 1);
		background: -moz-linear-gradient(45deg, rgba(25, 194, 110, 1) 0%, rgba(7, 224, 213, 1) 100%);
		background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(25, 194, 110, 1)), color-stop(100%, rgba(7, 224, 213, 1)));
		background: -webkit-linear-gradient(45deg, rgba(25, 194, 110, 1) 0%, rgba(7, 224, 213, 1) 100%);
		background: -o-linear-gradient(45deg, rgba(25, 194, 110, 1) 0%, rgba(7, 224, 213, 1) 100%);
		background: -ms-linear-gradient(45deg, rgba(25, 194, 110, 1) 0%, rgba(7, 224, 213, 1) 100%);
		background: linear-gradient(45deg, rgba(25, 194, 110, 1) 0%, rgba(7, 224, 213, 1) 100%);
		filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#19c26e', endColorstr='#07e0d5', GradientType=1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>