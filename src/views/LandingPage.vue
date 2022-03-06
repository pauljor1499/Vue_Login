<template>
	<div class="landingPage">
		<v-row align="center" justify="center">
			<v-col lg="4" sm="6" cols="11">
				<v-card class="signIn" height="500px">
					<div class="con">
						<h1>Hello, World</h1>
						<br />
						<h2>Welcome to the landing page.</h2>
						<br />
						<div class="imgCon">
							<img src="../assets/undraw_astronaut_re_8c33.svg" alt="" />
						</div>
						<v-btn to="/signin">Log Out</v-btn>
					</div>
				</v-card></v-col
			>
		</v-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},

		methods: {},
	};
</script>

<style scoped>
	.signIn {
		padding: 20px;
		margin-top: 100px;
	}
	.con {
		padding: 40px;
		text-align: center;
	}

	h1 {
		color: rgb(15, 15, 15);
		font-size: 50px;
	}

	h2 {
		color: grey;
	}

	.imgCon {
		padding: 20px;
	}
	img {
		width: 200px;
	}
</style>
