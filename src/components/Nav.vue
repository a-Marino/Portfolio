<template>
    <nav class="nav">
		<router-link to="/"><img src="@/assets/images/logo_argentina-blanco.svg" alt="Logo Argentina" class="w-64 ml-24"></router-link>
		<router-link to="/vacunate"><img src="@/assets/images/vacunate-logo-lg-n.svg" alt="Vacunate" class="h-10 mt-1 mr-24"></router-link>
	</nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style>
.nav {
	background-image: url("../assets/images/header.png");
	background-size: contain;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	border-bottom: 20px solid rgb(0, 0, 0, 0.7);
}
</style>