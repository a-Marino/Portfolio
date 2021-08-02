<template>
    <nav>
        <div class="nav flex-row justify-center items-center h-14 space-x-16 space-y-0 md:flex hidden">
            <router-link to="/" v-scroll-to="'#logo'" class='link lg:mb-4'>
                Inicio
            </router-link>
            <router-link to='/' v-scroll-to="'#about'" class='link'>
                Sobre mi
            </router-link>
            <router-link to="/" v-scroll-to="'#contact'" class='link'>
                Contacto
            </router-link>
            <a href='/proyectos' class="link">
                Proyectos
            </a>
        </div>
        <!-- NAV Movil -->
        <div class="md:hidden fixed nav-movil">
            <button class="movil-menu-button outline-none border-none" @click='openMenu'>
                <img src="@/assets/images/bars-solid.png" alt="bars" class="w-8 m-3 bars"/>
            </button>
            <div class="flex flex-col hidden pb-5 dropdown">
                <a href="/proyectos" class="link-mov pl-5">
                    Proyectos
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    methods: {
        openMenu() {
            const dropdown = document.querySelector('.dropdown');

            dropdown.classList.toggle('hidden');
        }
    }
}
</script>

<style scoped>
    .dropdown {
        width: 100%;
    }

    .bars {
        color: white;
    }
    .nav-movil {
        width: 100%;
        z-index: 1;
        background-color: #2828288a;
    }
    .nav {
        background-color: #2828288a;
        color: white;
        overflow: hidden;
        position: fixed;
        width: 100vw;
        z-index: 1;
    }

    .link {
        color: var(--gris-texto);
        font-size: 20px;
        transition: .2s;
        margin-top: 15px;
        font-family: 'Gruppo', cursive;
        font-weight: bold;
    }

    .link-mov {
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