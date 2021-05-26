<template>
	<div class="about min-h-screen">
		<Nav/>
		<div>
			<h1>Sobre Mi</h1>
		</div>
	</div>
</template>

<script>
import Nav from "@/components/Nav.vue"

export default {
    name: 'About',
    components: {
        Nav,
    }
}
</script>

<style scoped>
	.about {
		background-color: #0C0B09;
		color: #fff;
	}
</style>
