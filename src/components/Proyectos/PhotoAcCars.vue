<template>
    <div class="p-10">
        <h1>photoaccars</h1>
        <h3 class="gris mt-5">Personal Project</h3>
        <div class="flex flex-col lg:flex-row md:flex-row">
            <div class="w-full">
                <p class="pt-6 pl-6">
                    I have always liked photography, cars and videogames. <br>
                    And i like to spend my free time playing racing games and taking pictures. <br>
                    So i made this to showcase some of them. 
                </p>
                <p class="p-6">
                    You can check the live demo here: <br><a href='https://photoaccars.netlify.app/' class="verde" target="blank">https://photoaccars.netlify.app/</a>
                    <br>
                    Or GitHub: <br><a href='https://github.com/a-Marino/photoaccars' class="verde" target="blank">https://github.com/a-Marino/photoaccars</a>
                </p>
            </div>
            <video autoplay="autoplay" loop="loop" muted="muted" playsinline>
                <source src="@/assets/videos/photoaccars.mp4">
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: 'photoAcCars',
}
</script>

<style scoped>
    video {
        width: 48%;
        height: auto;
        float: right;
    }

    div {
        word-break: break-word;
        overflow: hidden;
    }

    h1 {
        /* Tailwind clases  */
        @apply text-3xl lg:text-6xl;
    }

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

    .gris {
        font-weight: 600;
        color: #504945;
    }

    .amarillo {
        color: var(--amarillo);
    }

    .btn {
        color: var(--amarillo);
        padding: 10px;
        border: 2px solid var(--amarillo);
        transition: .2s ease-in;
        font-weight: 600;
    }

    .btn:hover {
        color: black;
        background-color: var(--amarillo);
    }

    @media (max-width: 640px) { 
        video {
            width: 100%;
            float: none;
            margin-top: 10px;
        }
    }
</style>