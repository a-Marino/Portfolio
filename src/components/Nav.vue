<template>
    <div class="nav flex lg:flex-row md:flex-row flex-col justify-center items-center h-14 lg:space-x-16 md:space-x-16 lg:space-y-0 space-y-5 lg:pb-0 pb-5">
        <router-link to="/" class='link lg:mb-4'>
            Inicio
        </router-link>
        <router-link to="/" v-scroll-to="'#contact'" class='link'>
            Contacto
        </router-link>
        <router-link to='/' v-scroll-to="'#about'" class='link'>
            Sobre mi
        </router-link>
        <router-link to='proyectos' class="link">
            Proyectos
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style scoped>
    .nav {
        background-color: transparent;
        color: white;
        overflow: hidden;
    }

    .link {
        color: var(--gris-texto);
        font-size: 20px;
        transition: .2s;
        margin-top: 15px;
        font-family: 'Gruppo', cursive;
        font-weight: bold;
    }

    /*.index {
        transform: scale(1.3);
        -webkit-transform: scale(1.3);
        -moz-transform: scale(1.3);
        -o-transform: scale(1.3);
    }*/

    .link:hover {
        color: var(--amarillo);
        -webkit-transform: scale(1.3);
        -moz-transform: scale(1.3);
        -o-transform: scale(1.3);
        transform: scale(1.3);
        transition: .3s;
    }

</style>