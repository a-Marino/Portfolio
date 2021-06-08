<template>
	<div class="p-10">
		<h1>COVID-19 Secretaria de Salud Coronel Suarez</h1>
		<h3 class="mt-5 gris">Proyecto Universitario</h3>
		<div class="flex flex-col lg:flex-row md:flex-row">
			<div class="parrafos">
				<p class="p-6">
					Este proyecto fue realizado para la Materia Desarrollo de Aplicaciones 2.
				</p>
				<h3>Problematica</h3>
				<p class="p-6">
					La Secretaría de Salud de la municipalidad de Coronel Suarez desea procesar información para llevar cierto control sobre los ciudadanos del partido que recibieron las dos dosis de alguna vacuna para el COVID.
				</p>
				<h3>Solucion</h3>
				<p class="p-6">
					Se desarrollará una aplicación web para solucionar la problemática del cliente con el requerimiento de su parte de utilizar el patrón MVC, acordando con el cliente la utilización del framework <span class="amarillo">Laravel</span>. <br><br>
					<a href='https://github.com/a-Marino/Proyecto-1-Desarrollo-de-Apps-2-Laravel' class="amarillo" target="_blank">https://github.com/a-Marino/Proyecto-1-Desarrollo-de-Apps-2-Laravel</a>
				</p>
			</div>
			<div>
				<video autoplay="autoplay" loop="loop" muted="muted" playsinline>
					<source src="@/assets/videos/vid-pag-covid.mp4">
				</video>
				<div class="flex justify-center lg:flex-row md:flex-row flex-col lg:space-y-0
				md:space-y-0 space-y-3 lg:space-x-7 md:space-x-5 lg:text-lg md:text-lg text-base mt-4">
					<a href="https://campusvirtual.upso.edu.ar/pluginfile.php/288240/mod_resource/content/3/Proyecto1%20COMISION%201.pdf" target="_blank" class="btn">Enunciado</a>
					<a href="https://docdro.id/7eCVAZG" target="_blank" class="btn">Documentacion</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ProyectoCOVID',
	}
</script>

<style scoped>
	div {
		word-break: break-word;
		overflow: hidden;
	}

	h1 {
		color: var(--amarillo);
		overflow-y: hidden;
		/* Tailwind clases  */
		@apply text-3xl lg:text-6xl;
	}

	h2 {
		color: var(--amarillo);
		font-family: 'Bungee', cursive;
		overflow: hidden;
		@apply text-2xl lg:text-5xl;
	}

	h3 {
		color: var(--gris-texto);
		@apply text-xl lg:text-3xl;
	}

	p {
		color: rgb(190,190,190);
		@apply text-lg
	}

	.gris {
		color: rgba(128,128,128,0.5);
	}

	.amarillo {
		color: var(--amarillo);
	}

	.btn {
		color: var(--amarillo);
		padding: 10px;
		border: 2px solid var(--amarillo);
		transition: .2s ease-in;
	}

	.btn:hover {
		color: black;
		background-color: var(--amarillo);
	}
</style>