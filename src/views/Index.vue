<template>
    <div class="fondo min-h-screen">
        <Nav/>
        <Redes/>
    </div> 
</template>

<script>
import Nav from "@/components/Nav.vue"
import Redes from '@/components/Redes.vue'

export default {
    name: 'Index',
    components: {
        Nav,
        Redes,
    }
}
</script>

<style scoped>
    .fondo {
        background-color: #0C0B09;
        background-image: url('../assets/images/IMG_20200323_032556_293.jpg');
        background-repeat: no-repeat;
        background-position-x: 50%;
        background-size: contain;
    }
</style>