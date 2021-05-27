<template>
    <div>
        <Nav/>
        <div class="min-h-screen">
            <div class="flex justify-center">
                <img src="@/assets/images/IMG_20200323_032556_293.jpg" class="imagen mt-32">  
            </div>
        </div>
        <Redes/>
        <About/>
        <Contact/>
    </div> 
</template>

<script>
import Nav from "@/components/Nav.vue"
import Redes from '@/components/Redes.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'

export default {
    name: 'Index',
    components: {
        Nav,
        Redes,
        About,
        Contact
    }
}
</script>

<style scoped>
    *{
        background-color: #0C0B09;
    }

    .imagen {

    }
</style>