<template>
    <div>
        <Nav/>
        <Logo/>
        <!-- ID is for scroll-to !-->
        <About id='about'/>
        <Contact id='contact'/>
        <Redes/>
    </div> 
</template>

<script>
import Nav from "@/components/Nav.vue"
import Logo from "@/components/Logo.vue"
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Redes from '@/components/Redes.vue'

export default {
    name: 'Index',
    components: {
        Nav,
        Logo,
        About,
        Contact,
        Redes
    },
}
</script>

<style scoped>
    *{
        background-color: #0C0B09;
    }
</style>