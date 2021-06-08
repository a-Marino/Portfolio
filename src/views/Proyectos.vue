<template>
	<div class="contenedor">
		<div class="principal">
			<router-link to='/'>
				<lord-icon
		    		src="https://cdn.lordicon.com//gmzxduhd.json"
		    		trigger="loop-on-hover"
		    		colors="primary:#dbb62e,secondary:#808080"
		    		style="width:70px;height:70px;"
		    		class="m-7 lg:float-right"
				>
				</lord-icon>	
			</router-link>
			<div class="flex">
				<div class="p-16">
					<h1 lg:text-left md:text-left text-center>Proyectos</h1>
					<ol class="lg:p-20 md:p-16 lg:mt-0 md:mt-0 mt-7">
						<a v-scroll-to="'#covid'">
							<li>Proyecto COVID-19</li>
						</a>
					</ol>
				</div>
			</div>
		</div>
		<section id="covid">
			<ProyectoCOVID/>
		</section>
		<!-- <section>
			<div class="p-10">
				<h2>Page 2</h2>
			</div>
		</section>
		<section>
			<div class="p-10">
				<h2>Page 3</h2>
			</div>
		</section> -->
	</div>
</template>

<script>
	import ProyectoCOVID from '@/components/Proyectos/ProyectoCOVID.vue'

	export default {
		name: 'Proyectos',
		components: {
			ProyectoCOVID,
		}
	}
</script>

<style scoped>
	.contenedor {
		width: 100%;
		height: 100%;
	}

	.principal {
		width: 100vw;
		height: 100vh;
	}

	section {
		display: flex;
	}

	ol {
		list-style-type: none;
	}

	a {
		cursor: pointer;
	}

	li {
		position: relative;
  		color: var(--gris-texto);
		@apply lg:text-2xl md:text-2xl text-xl;
	}


	li:hover {
		background: linear-gradient(to right, #808080 20%, #DBB62E 40%, #DBB62E 60%, #DBB62E 80%);
 		background-size: 200% auto;
 		color: var(--gris-texto);
 		background-clip: text;
 		text-fill-color: transparent;
 		-webkit-background-clip: text;
 		-webkit-text-fill-color: transparent;
 		animation: shine 2s linear infinite;
	}

	@keyframes shine {
	  to {
	    background-position: 200% center;
	  }
	}

	h1 {
		color: var(--amarillo);
		overflow-y: hidden;
		/* Tailwind clases  */
		@apply text-3xl lg:text-6xl;
	}
</style>