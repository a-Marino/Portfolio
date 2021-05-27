<template>
	<div class="contact min-h-screen">
		<Nav/>
		<h1 class="text-5xl text-center mt-14">Contactame</h1>
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
				<p>Su mensaje ha sido enviado correctamente</p>
			</div>
			<div>
				<input type="submit" value="Enviar" id="btnSubmit">
			</div>
		</form>
		<Redes/>
	</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Redes from '@/components/Redes.vue'
//Libreria para el formulario de contactos 
import emailjs from 'emailjs-com'

export default {
    name: 'Contact',
    components: {
        Nav,
        Redes,
    },
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
		background-color: #0C0B09;
		background-image: url('../assets/images/fondo-1.jpg');
        background-repeat: no-repeat;
        background-position-y: 30%;
        background-size: cover;
		color: #fff;
	}

	.form {
		text-align: center;
		margin: auto;
		margin-top: 60px;
	}

	h1 {
		color: #D8B222;
		cursor: default;
	}

	input, textarea {
		margin-top: 5px;
		padding: 5px;
		outline: none;
		color: white;
		transition: .2s;
		background-color: transparent;
		border-bottom: 3px solid rgba(128,128,128,0.5);
		resize: none;
	}

	input:focus, textarea:focus {
		border-bottom: 3px solid #D8B222;
		transition: .2s;
		transform: scale(1.01);
	}

	input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {
		color: rgba(128,128,128,0.5);
		padding: 10px;
		transition: .2s;
	}

	input[type=submit] {
		padding: 5px 15px;
		border: 2px solid #D8B222;
		background-color: transparent;
		cursor: pointer;
		transition: .2s;
		color: #D8B222;
	}

	input[type=submit]:hover {
		transform: scale(1.1);
		background-color: #D8B222;
		color: black;
		transition: .2s;
	}

	.oculto {
		display: none;
	}
</style>