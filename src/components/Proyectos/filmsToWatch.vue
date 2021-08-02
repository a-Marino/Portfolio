<template>
    <div class="p-10">
        <h1 class="text-3xl lg:text-6xl">filmsToWatch</h1>
        <h3 class="gris mt-5">Personal Project</h3>
        <div class="flex flex-col lg:flex-row md:flex-row">
            <div class="w-full">
                <p class="pt-6 pl-6">
                    In this page you can search Movies and TV Shows. <br>
                    You can read the Overview, know the year of release, who is the director, and much more. <br>
                    I made this with VueJS and TheMovieDB API. 
                </p>
                <p class="p-6">
                    You can check the live demo here: <br><a href='https://films-towatch.netlify.app/' class="verde" target="blank">https://films-towatch.netlify.app/</a>
                    <br>
                    Or GitHub: <br><a href='https://github.com/a-Marino/filmsToWatch' class="verde" target="blank">https://github.com/a-Marino/filmsToWatch</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'filmsToWatch',
}
</script>

<style scoped>
    .gris {
        font-weight: 600;
        color: #504945;
    }

    h2 {
        color: var(--amarillo);
        font-family: 'Bungee', cursive;
        overflow: hidden;
        @apply text-2xl lg:text-5xl;
    }

    h3 {
        font-weight: 500;
        @apply text-xl lg:text-3xl;
        color: var(--gris-texto)
    }

    p {
        @apply text-lg leading-relaxed tracking-wide;
    }

    div {
        word-break: break-word;
        overflow: hidden;
    }

    .amarillo {
        color: var(--amarillo);
    }
</style>