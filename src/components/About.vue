<template>
	<div class="about min-h-full"  v-scrollanimation>
		<h1 class="text-5xl text-center mb-5 overflow-hidden">Sobre Mi</h1>
		<button class="block mx-auto lg:mb-24 btn text-sm" @click='changeLanguage' id="btnIdioma">English</button>
		<div class="flex justify-center min-w-screen lg:flex-row md:flex-row flex-col mx-auto lg:space-x-10 sm:space-x-0">
			<div class="lg:w-1/4 md:w-1/4 w-full space-y-5 text-center lg:p-0 md:p-0 p-10" id="spanish">
				<p>
					<span class="azul">&lt;</span><span class="agua">p</span><span class="mr-3 azul">&gt;</span>
					<span class="text-xl font-semibold tracking-wide violeta">Hola.</span>
					Soy Andrés Marino. Tengo 20 años, y vivo en la ciudad de Coronel Suarez, Provincia de Buenos Aires, Argentina.
					<span class="azul">&lt;</span><span class="agua">/p</span><span class="mr-3 azul">&gt;</span>
				</p>
				<p>
					<span class="azul">&lt;</span><span class="agua">p</span><span class="azul">&gt;</span>
					En este momento estoy cursando el tercer y ultimo año de la Tecnicatura Diseño de Aplicaciones Web, en la Universidad <a href="https://www.upso.edu.ar/" target="_blank" class="text-lg font-semibold fuente-source violeta">UPSO</a>.
					<span class="azul">&lt;</span><span class="agua">/p</span><span class="azul mr-3">&gt;</span>
				</p>
				<p>
					<span class="text-lg rojo">let</span><span class="agua"> = </span><span class="azul">conocimientos</span><span class="gris-alter">;</span><br>
					<span class="azul">conocimientos</span><span class="agua"> = </span>
					[
					<ul>
						<li>HTML,</li>
						<li>CSS,</li>
						<li>Bootstrap,</li>
						<li>TailwindCSS,</li>
						<li>PHP,</li>
						<li>Laravel,</li>
						<li>JavaScript,</li>
						<li>PosgresSQL,</li>
						<li>phpMyAdmin,</li>
						<li>Ingles</li>
					</ul>
					]<span class="gris-alter">;</span>
				</p>
			</div>
			<div class="oculto-2 lg:w-1/4 md:w-1/4 w-full space-y-5 text-center lg:p-0 md:p-0 p-10" id="english">
				<p>
					<span class="azul">&lt;</span><span class="agua">p</span><span class="mr-3 azul">&gt;</span>
					<span class="text-xl font-semibold tracking-wide violeta">Hi.</span>
					Im Andrés Marino. I am 20 years old, i live in Coronel Suarez, Province of Buenos Aires, Argentina.
					<span class="azul">&lt;</span><span class="agua">/p</span><span class="mr-3 azul">&gt;</span>
				</p>
				<p>
					<span class="azul">&lt;</span><span class="agua">p</span><span class="azul">&gt;</span>
					At the moment i am studying the third and last year of Technical degree in Web Application Design, in <a href="https://www.upso.edu.ar/" target="_blank" class="text-lg font-semibold fuente-source violeta">UPSO</a> University.
					<span class="azul">&lt;</span><span class="agua">/p</span><span class="azul mr-3">&gt;</span>
				</p>
				<p>
					<span class="text-lg rojo">let</span><span class="agua"> = </span><span class="azul">knowledge</span><span class="gris-alter">;</span><br>
					<span class="azul">knowledge</span><span class="agua"> = </span>
					[
					<ul>
						<li>HTML,</li>
						<li>CSS,</li>
						<li>Bootstrap,</li>
						<li>TailwindCSS,</li>
						<li>PHP,</li>
						<li>Laravel,</li>
						<li>JavaScript,</li>
						<li>PosgresSQL,</li>
						<li>phpMyAdmin,</li>
						<li>Ingles</li>
					</ul>
					]<span class="gris-alter">;</span>
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
    methods: {
		changeLanguage: function() {
			const divSpanish = document.querySelector('#spanish');
			const divEnglish = document.querySelector('#english');
			const btnIdioma = document.querySelector('#btnIdioma');

			divSpanish.classList.toggle('oculto-2');
			divEnglish.classList.toggle('oculto-2');

			if (divSpanish.classList.contains('oculto-2')) {
				btnIdioma.innerHTML = 'Spanish';
			} else if (divEnglish.classList.contains('oculto-2')) {
				btnIdioma.innerHTML = 'Ingles'; 
			}
		}
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap');
	
	p, span, ul, li, .fuente-source {
		font-family: 'Source Code Pro', monospace;
	}

	.oculto-2 {
		display: none;
	}

	.btn {
		padding: 3px 10px;
		border: 2px solid #D8B222;
		background-color: transparent;
		cursor: pointer;
		transition: .2s;
		color: var(--amarillo);
		outline: none;
	}

	.btn:hover {
		transform: scale(1.1);
		background-color: var(--amarillo);
		color: black;
		transition: .2s;
	}

	.about {
		overflow: hidden;
		background-color: transparent;
	}

	h1 {
		color: var(--verde);
	}

	.cara {
		margin-top: -30px;
		margin-left: 80px;
	}

	p {
		color: var(--gris-texto);
	}

	.amarillo {
		color: var(--amarillo);
	}

	/* scrollAnimation Directive classes */
	
	.before-enter {
		opacity: 0;
		transform: translateX(100px);
		transition: all 2s ease-out;
	}

	.enter {
		opacity: 1;
		transform: translateX(0px);
	}
</style>
