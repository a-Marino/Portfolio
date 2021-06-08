<template>
	<div class="contact min-h-full mb-32" v-scrollanimation>
		<h1 class="text-5xl text-center mt-40 amarillo">Contactame</h1>
		<p class="email text-center mt-4">andresmarino.contacto@gmail.com</p>
		<form class="form flex flex-col space-y-5 my-0" @submit.prevent="sendEmail" autocomplete="off">
			<div class="space-x-4">
				<input type="text" v-model="name" name="name" required placeholder="Tu Nombre" class="w-1/4">
				<input type="email" v-model="email" name="email" required placeholder="Tu Email" class="w-1/4">
			</div>
			<div>
				<textarea class="w-1/2" name="message" cols="30" rows="7" v-model="message" required placeholder="Tu Mensaje"></textarea>
			</div>
			<div class="flex justify-center flex-row items-center oculto" id="divMsg">
				<img src="@/assets/images/checked.png" class="w-7 mr-3">
				<p class="amarillo">Su mensaje ha sido enviado correctamente</p>
			</div>
			<div class="divBoton">
				<input type="submit" value="Enviar" id="btnSubmit">
			</div>
		</form>
	</div>
</template>

<script>
//Libreria para el formulario de contactos 
import emailjs from 'emailjs-com'

export default {
    name: 'Contact',
    data() {
    	return {
    		name: '',
    		email: '',
    		message: '',
    	}
    },
    methods: {
    	sendEmail(e) {
    		try {
    			// Service ID - Template ID - User ID
    			emailjs.sendForm('service_xdl5dyd', 'template_5enry9j', e.target, 'user_nT1iOdL42gmrzj1lnYOKP',
    			{
    				name: this.name,
    				email: this.email,
    				message: this.message,
    			})
    		} catch(error) {
    			console.log({error});
    		}
    		let divMsg = document.querySelector('#divMsg')
    		let btnSubmit = document.querySelector('#btnSubmit')
    		// Funcion para mostrar el DIV
    		const quitarClase = () => {
    			divMsg.classList.remove('oculto');
    		}
    		// Funcion para ocultar el DIV
    		const agregarClase = () => {
    			divMsg.classList.add('oculto');
    		}
    		// Muestra el DIV
    		quitarClase();
    		// Lo oculta en 7 segundos
    		setTimeout(agregarClase, 10000);
    		// Resetar campos
    		this.name = ''
    		this.email = ''
    		this.message = ''
    	},
    }
}
</script>

<style scoped>
	.contact {
		background-color: transparent;
	}

	.divBoton {
		overflow: hidden;
	}

	.form {
		text-align: center;
		margin: auto;
		margin-top: 60px;
	}

	.amarillo {
		color: var(--amarillo);
		cursor: default;
	}

	h1 {
		overflow: hidden;
	}

	input, textarea {
		margin-top: 5px;
		padding: 5px;
		outline: none;
		color: var(--gris-texto);
		transition: .2s;
		background-color: transparent;
		border-bottom: 3px solid rgba(128,128,128,0.5);
		resize: none;
		overflow: hidden;
	}

	input:focus, textarea:focus {
		border-bottom: 3px solid var(--amarillo);
		transition: .2s;
		color: var(--amarillo);
		transform: scale(1.01);
	}

	input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {
		color: rgba(128,128,128,0.5);
		padding: 10px;
		transition: .2s;
	}

	input[type=submit] {
		padding: 5px 15px;
		border: 2px solid var(--amarillo);
		background-color: transparent;
		cursor: pointer;
		transition: .2s;
		color: var(--amarillo);
	}

	input[type=submit]:hover {
		transform: scale(1.1);
		background-color: var(--amarillo);
		color: black;
		transition: .2s;
	}

	.oculto {
		display: none;
	}

	.email{
		color: rgba(128,128,128,0.5);
		cursor: default;
	}

	/* scrollAnimation Directive classes */

	.before-enter {
		opacity: 0;
		transform: translateX(-100px);
		transition: all 2s ease-out;
		overflow: hidden;
	}

	.enter {
		opacity: 1;
		transform: translateX(0px);
		overflow: hidden;
	}
</style>