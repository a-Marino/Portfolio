<template>
    <div>
    <v-content>
        <Nav/>
        <div class="min-h-screen" id="index">
            <div class="flex justify-center">
                <img src="@/assets/images/IMG_20200323_032556_293.jpg" class="imagen mt-32">  
            </div>
        </div>
        <About id='about'/>
        <Contact id='contact'/>
    </v-content>
    </div> 
</template>

<script>
import Nav from "@/components/Nav.vue"
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'

export default {
    name: 'Index',
    components: {
        Nav,
        About,
        Contact
    }
}
</script>

<style scoped>
    *{
        background-color: #0C0B09;
    }
</style>