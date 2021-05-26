<template>
  <div id="app">
    <div class="relative min-h-screen flex m-0 p-0">
      <!-- CONTENIDO  -->
      <div class="flex-1">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,500;0,700;1,100;1,600&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Barlow', sans-serif;
}
</style>
