<template>
    <div>
        <Nav/>
        <div class="min-h-screen" id="index">
            <div class="flex justify-center divImg">
                <img src="@/assets/images/IMG_20200323_032556_293.png" class="imagen mt-32 animate__animated animate__bounceIn">  
            </div>
        </div>
        <About id='about'/>
        <Contact id='contact'/>
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
    },
}
</script>

<style scoped>
    *{
        background-color: #0C0B09;
    }

    .divImg {
        overflow: hidden;
    }

    .imagen {
        background-color: transparent;
        animation-duration: 2s;
        animation-delay: .5s;
    }
</style>