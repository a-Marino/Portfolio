<template>
    <div class="fondo min-h-screen">
        <Nav/>
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

export default {
    name: 'Index',
    components: {
        Nav,
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