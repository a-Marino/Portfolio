<template>
  <div
    class="md:min-h-screen flex flex-col justify-center items-center md:mt-0 mt-10 md:p-0 p-10"
    id="Projects"
  >
    <h1
      class="amarillo md:text-5xl text-3xl font-extrabold borde-top md:mb-0 mb-10"
    >
      PROJECTS
    </h1>
    <div
      class="flex md:flex-row flex-col md:space-x-10 md:p-10 md:space-y-0 space-y-10"
    >
      <div class="flex flex-col space-y-3 relative">
        <a href="https://films-towatch.web.app/" target="blank">
          <img src="@/assets/images/filmsToWatch.png" class="projects-imgs" />
        </a>
        <img
          src="@/assets/images/vue.svg"
          class="w-8 absolute bottom-14 right-2"
        />
        <h2 class="text-center text-2xl font-bold borde-top">filmsToWatch</h2>
      </div>
      <div class="flex flex-col space-y-3 relative">
        <a href="https://photoaccars.web.app" target="blank">
          <img src="@/assets/images/photoAcCars.png" class="projects-imgs" />
        </a>
        <img
          src="@/assets/images/vue.svg"
          class="w-8 absolute bottom-14 right-2"
        />
        <h2 class="text-center text-2xl font-bold borde-top">photoAcCars</h2>
      </div>
      <div class="flex flex-col space-y-3 relative">
        <a href="https://andymaldonadook.web.app/" target="blank">
          <img
            src="@/assets/images/AndyMaldonadoProdu.png"
            class="projects-imgs"
          />
        </a>
        <img
          src="@/assets/images/vue.svg"
          class="w-8 absolute bottom-14 right-2"
        />
        <h2 class="text-center text-2xl font-bold borde-top">Andy Maldonado</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style scoped>
.projects-imgs {
  width: 500px;
}
</style>
