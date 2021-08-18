<template>
    <div class="md:min-h-screen flex flex-col justify-center items-center md:mt-0 mt-20" id="About">
        <div class="self-start md:px-20 py-10 -mt-10 px-5">
            <h1 class="md:text-5xl text-3xl font-extrabold amarillo borde-top">ABOUT ME</h1>
        </div>
        <div class="flex flex-col md:flex-row md:space-x-5 md:space-y-0 md:w-3/4 text-justify md:items-center justify-center ABOUT pb-12 space-y-5">
            <div class="md:w-1/3 p-5 md:p-0">
                <p>Hi. Im <span class="amarillo font-bold">Andrés Marino</span>. Im 20 years old, i live in Coronel Suarez, Province of Buenos Aires, Argentina.</p>
                <p>At the moment I am studying the third and final year of the <span class="amarillo font-bold">Technical Degree in Web Applications Design</span> at <span class="amarillo font-bold">UPSO</span> University.</p>
            </div>
            <div class="md:w-1/2 flex flex-col items-center space-y-5">
                <h2 class="text-center amarillo text-2xl font-extrabold">SKILLS</h2>
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
</template>

<script>
export default {
    name: 'About'
}
</script>