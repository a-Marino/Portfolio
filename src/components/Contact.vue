<template>
  <div
    class="md:min-h-screen flex flex-col justify-center items-center md:mt-0 mt-5"
    id="Contact"
  >
    <h1 class="amarillo md:text-5xl text-3xl borde-top font-extrabold">
      CONTACT
    </h1>
    <h3 class="mt-2 font-extralight">andresmarino.contacto@gmail.com</h3>
    <form
      class="flex flex-col space-y-5 md:mt-10 md:p-0 p-10"
      ref="form"
      @submit.prevent="sendEmail"
      autocomplete="off"
    >
      <div class="md:space-x-4 text-center md:space-y-0 space-y-5 w-full">
        <input
          type="text"
          v-model="from_name"
          name="from_name"
          required
          placeholder="Your Name"
          class="input"
        />
        <input
          type="email"
          v-model="email"
          name="email"
          required
          placeholder="Your Email"
          class="input"
        />
      </div>
      <div>
        <textarea
          name="message"
          cols="30"
          rows="7"
          v-model="message"
          required
          placeholder="Your Message"
          class="w-full input"
        ></textarea>
      </div>
      <div class="text-center">
        <input type="submit" value="Send" id="btnSubmit" class="sbm-btn" />
      </div>
    </form>
  </div>
</template>

<script>
//Libreria para el formulario de contactos
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  data() {
    return {
      from_name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      try {
        // Service ID - Template ID - API KEY
        emailjs.sendForm(
          "service_zo01f5m",
          "template_1sino0c",
          this.$refs.form,
          "JaJfQzxvFODHUlq9F",
          {
            from_name: this.from_name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      this.from_name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped></style>
