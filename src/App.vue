<template>
  <div id="app">
    <Nav/>
    <div class="relative min-h-screen flex m-0 p-0">
      <Sidebar/>
      <!-- CONTENIDO  -->
      <div class="flex-1 p-10">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue"
import Sidebar from "@/components/Sidebar.vue"

export default {
  name: "App",
  components : {
    Nav,
    Sidebar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,500;0,700;1,100;1,600&display=swap');

* {
  font-family: 'Barlow', sans-serif;
}
</style>
