<template>
	<v-app>
		<div class="main">
			<v-main>
				<router-view />
			</v-main>
		</div>
	</v-app>
</template>

<script>
	export default {
		name: "App",

		data: () => ({
			//
		}),
	};
</script>

<style scoped>
	.main {
		background-color: rgb(228, 228, 228);
		min-height: 100vh;
	}
</style>
