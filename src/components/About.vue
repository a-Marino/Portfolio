<template>
	<div class="about min-h-full">
		<h1 class="text-3xl text-center mb-24">Sobre Mi</h1>
		<div class="flex justify-center min-w-screen lg:flex-row md:flex-row flex-col mx-auto">
			<div class="lg:w-1/4 md:w-1/4 w-full space-y-5 text-center lg:p-0 md:p-0 p-10">
				<p>
				Hola.<br>
				Soy Andrés Marino. Tengo 20 años, y vivo en la ciudad de Coronel Suarez, Provincia de Buenos Aires, Argentina.
				</p>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati cupiditate, quam! Qui quisquam repellendus odit, voluptatum modi excepturi eum eos, animi rem ipsum minima veritatis consequatur saepe ut aspernatur harum.</p>
			</div>
			<div>
				<img src="@/assets/images/andresmarino.png" class="lg:h-xl md:h-xl lg:cara md:cara lg:p-0 md:p-0 p-10">
			</div>
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

	h1 {
		color: #dbb62e;
	}

	.cara {
		margin-top: -30px;
		margin-left: 80px;
	}
</style>
