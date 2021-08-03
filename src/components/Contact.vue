<template>
	<div class="md:min-h-screen flex flex-col justify-center items-center md:mt-0 mt-5">
		<h1 class="amarillo md:text-5xl text-3xl borde-top font-extrabold">CONTACT</h1>
		<h3 class="mt-2 font-extralight">andresmarino.contacto@gmail.com</h3>
		<form class="flex flex-col space-y-5 md:mt-10 md:p-0 p-10" @submit.prevent="sendEmail" autocomplete="off">
			<div class="md:space-x-4 text-center md:space-y-0 space-y-5 w-full">
				<input type="text" v-model="name" name="name" required placeholder="Tu Nombre" class="input">
				<input type="email" v-model="email" name="email" required placeholder="Tu Email" class="input">
			</div>
			<div>
				<textarea name="message" cols="30" rows="7" v-model="message" required placeholder="Tu Mensaje" class="w-full input"></textarea>
			</div>
			<div class="text-center">
				<input type="submit" value="SEND" id="btnSubmit" class="sbm-btn">
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
			this.name = ''
			this.email = ''
			this.message = ''
		},
    }
}
</script>

<style scoped>
	
</style>