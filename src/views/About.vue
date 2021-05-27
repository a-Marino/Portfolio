<template>
	<div class="about min-h-screen">
		<Nav/>
		<h1 class="text-3xl mt-10 ml-16">Sobre Mi</h1>
		<div class="flex">
			<div class="w-1/4 ml-24 mt-10 space-y-5">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam cumque ipsa porro nostrum illo minus quis ex deserunt hic officia, molestias voluptatum modi velit laborum dicta incidunt amet molestiae.</p>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati cupiditate, quam! Qui quisquam repellendus odit, voluptatum modi excepturi eum eos, animi rem ipsum minima veritatis consequatur saepe ut aspernatur harum.</p>
			</div>
			<img src="@/assets/images/andresmarino.png" class="h-xl cara">
		</div>
		<Redes/>
	</div>
</template>

<script>
import Nav from "@/components/Nav.vue"
import Redes from "@/components/Redes.vue"

export default {
    name: 'About',
    components: {
        Nav,
        Redes,
    }
}
</script>

<style scoped>
	.about {
		background-color: #0C0B09;
		color: #fff;
	}

	h1 {
		color: #dbb62e;
	}

	.cara {
		margin-top: -30px;
		margin-left: 80px;
	}
</style>
