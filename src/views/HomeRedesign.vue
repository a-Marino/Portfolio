<template>
    <div class="home">
        <!-- NAV -->
        <header class="fixed right-0">
            <nav class="hidden md:flex p-3">
                <ul class="flex space-x-4 text-lg">
                    <li>
                        <router-link to="/redesign">About</router-link> 
                    </li>
                    <li>
                        <router-link to="/redesign">Projects</router-link> 
                    </li>
                    <li>
                        <router-link to="/redesign">Contact</router-link> 
                    </li>
                </ul>
            </nav>
        </header>
        <!-- MAIN DIV -->
        <div class="md:min-h-screen flex flex-row items-center md:p-20 justify-center md:mt-0 mt-10 md:justify-around">
            <div class="flex flex-col md:text-left text-center">
                <h1 class="text-white md:text-8xl text-5xl font-extrabold">ANDRES</h1>
                <h1 class="amarillo md:text-8xl text-7xl font-extrabold md:ml-32">MARINO</h1>
                <div class="flex flex-row md:mt-10 mt-5 space-x-2">
                    <h2 class="md:text-4xl text-xl font-semibold web">Web</h2>
                    <h2 class="md:text-4xl text-xl font-semibold stroke">DESIGNER</h2>
                </div>
            </div>
            <div class="md:block hidden">
                <img src="@/assets/images/andresmarino.png" class="h-xl">
            </div>
        </div>
        <!-- ABOUT -->
        <div class="md:min-h-screen flex flex-col justify-center items-center md:mt-0 mt-20">
            <div class="self-start md:px-20 py-10 -mt-10 px-5">
                <h1 class="md:text-5xl text-3xl font-extrabold amarillo ABOUT-TITLE">ABOUT ME</h1>
            </div>
            <div class="flex flex-col md:flex-row md:space-x-5 md:space-y-0 md:w-3/4 text-justify md:items-center justify-center ABOUT pb-12 space-y-5">
                <div class="md:w-1/3 p-5 md:p-0">
                    <p>Hola. Soy <span class="amarillo font-bold">Andrés Marino</span>. Tengo 20 años, y vivo en la ciudad de Coronel Suarez, Provincia de Buenos Aires, Argentina.</p>
                    <p>En este momento estoy cursando el tercer y ultimo año de la <span class="amarillo font-bold">Tecnicatura Diseño de Aplicaciones Web</span>, en la Universidad <span class="amarillo font-bold">UPSO</span>.</p>
                </div>
                <div class="md:w-1/2 flex flex-col items-center space-y-5">
                    <h2 class="text-center amarillo text-2xl font-extrabold">CONOCIMIENTOS</h2>
                    <div class="grid grid-cols-4 gap-5">
                        <img src="@/assets/images/html_5.svg">
                        <img src="@/assets/images/css_3.svg">
                        <img src="@/assets/images/js.svg">
                        <img src="@/assets/images/Tailwind.svg">
                        <img src="@/assets/images/php.svg">
                        <img src="@/assets/images/vue.svg">
                        <img src="@/assets/images/figma.svg">
                        <img src="@/assets/images/adobe_xd.svg">
                    </div>
                </div>
            </div>
        </div>
        <!-- PROJECTS -->
        <div class="md:min-h-screen">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@100;300;400;500;600;700;800&display=swap');

.home {
    color: #FFF;
    font-family: 'Be Vietnam', sans-serif;
}

.web {
    margin-top: 8px;
}

.stroke {
    color: #FFBB00;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #FFBB00;
    border-top: 8px solid #FFBB00;
}

.ABOUT {
    border-bottom: 15px solid #FFBB00;
}

.ABOUT-TITLE {
    border-top: 8px solid #FFBB00;
}
</style>