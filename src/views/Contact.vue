<template>
	<div class="contact min-h-screen">
		<Nav/>
		<form class="form flex flex-col space-y-5" @submit.prevent="sendEmail">
			<div>
				<label for="=nombre">Nombre:</label>
				<br>
				<input type="text" v-model="name" name="name" required placeholder="Tu Nombre">
			</div>
			<div>
				<label for="email">Email:</label>
				<br>
				<input type="email" v-model="email" name="email" required placeholder="Tu Email">
			</div>
			<div>
				<label for="Mensaje">Mensaje:</label>
				<br>
				<textarea name="message" cols="30" rows="5" v-model="message" required placeholder="Tu Mensaje"></textarea>
			</div>
			<div class="flex justify-center flex-row items-center oculto" id="divMsg">
				<img src="@/assets/images/checked.png" class="w-7 mr-3">
				<p>Su mensaje ha sido enviado correctamente</p>
			</div>
			<div>
				<input type="submit" value="Enviar" id="btnSubmit">
			</div>
		</form>
		<div class="redes absolute bottom-0 right-0">
            <div class="flex space-x-4 p-4">
                <router-link to='/instagram' class="red-social">
                    <img src="@/assets/images/instagram.png" class="w-8">
                </router-link>
                <router-link to='/github' class="red-social">
                    <img src="@/assets/images/github.png" class="w-8">
                </router-link>
                <router-link to='/linkedin' class="red-social">
                    <img src="@/assets/images/linkedin.png" class="w-8">
                </router-link>
            </div>
        </div>
	</div>
</template>

<script>
import Nav from "@/components/Nav.vue"
import emailjs from 'emailjs-com'

export default {
    name: 'Contact',
    components: {
        Nav,
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
    		setTimeout(agregarClase, 7000);
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
		color: #fff;
	}

	.form {
		text-align: center;
		margin: auto;
		margin-top: 60px;
	}

	label {
		font-size: 20px;
	}

	input, textarea {
		margin-top: 5px;
		padding: 5px;
		outline: none;
		border: 1px solid #D8B222;
		border-radius: 5px;
		color: black;
		width: 50%;
		transition: .2s
	}

	input:focus, textarea:focus {
		border: 3px solid #D8B222;
		transition: .2s
	}

	input[type=submit] {
		padding: 5px 15px;
		border: none;
		background-color: #D8B222;
		cursor: pointer;
		transition: .2s;
	}

	input[type=submit]:hover {
		transform: scale(1.02);
		transition: .2s;
	}

	.oculto {
		display: none;
	}
</style>