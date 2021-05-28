<template>
	<div class="about min-h-full">
		<h1 class="text-3xl text-center lg:mb-24">Sobre Mi</h1>
		<div class="flex justify-center min-w-screen lg:flex-row md:flex-row flex-col mx-auto lg:space-x-10 sm:space-x-0">
			<div class="lg:w-1/4 md:w-1/4 w-full space-y-5 text-center lg:p-0 md:p-0 p-10">
				<p>
					<span class="text-xl font-semibold tracking-wide amarillo">Hola.</span> <br>
					Soy Andrés Marino. Tengo 20 años, y vivo en la ciudad de Coronel Suarez, Provincia de Buenos Aires, Argentina.
				</p>
				<p>
					En este momento estoy cursando el tercer y ultimo año de la Tecnicatura Diseño de Aplicaciones Web, en la Universidad de la <a href="https://www.upso.edu.ar/" target="_blank" class="amarillo text-lg font-semibold">UPSO</a>. <br>
				</p>
				<p>
					<span class="amarillo text-lg font-semibold">Conocimientos:</span> <br>
					<ul>
						<li>HTML y CSS</li>
						<li>Bootstrap y TailwindCSS</li>
						<li>PHP y Laravel</li>
						<li>JavaScript, y un poco de VueJS</li>
						<li>PosgresSQL y phpMyAdmin</li>
						<li>Ingles avanzado</li>
					</ul>
				</p>
			</div>
			<div>
				<img src="@/assets/images/andresmarino.png" class="lg:h-xl md:h-xl lg:cara md:cara lg:p-0 md:p-0 p-10">
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'About',
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

	p {
		color: rgba(128,128,128);
	}

	.amarillo {
		color: #dbb62e;
	}

</style>
