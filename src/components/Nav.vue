<template>
    <div class="nav flex justify-center items-center h-14 space-x-24 z-0">
        <router-link to="/contact" class='link'>
            Contacto
        </router-link>
        <router-link to="/" class='link'>
            Inicio
        </router-link>
        <router-link to='/about' class='link'>
            Sobre mi
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
        background-color: #1a1a1aE6;
        color: white;
        overflow: hidden;
        box-shadow: 0 5px 10px 10px #1a1a1aE6;
    }

    .link {
        color: #707070;
        font-size: 20px;
        transition: .2s;
        margin-top: 15px;
        margin-bottom: 13px;
    }

    a.router-link-exact-active {
        transform: scale(1.5);
        color: #D8B222;
    }

    a.router-link-exact-active:hover {
        transform: scale(1.5);
        color: #D8B222;
    }

    .link:hover {
        color: #B7B7B7;
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -o-transform: scale(1.2);
        transform: scale(1.2);
        transition: .3s;
    }
</style>