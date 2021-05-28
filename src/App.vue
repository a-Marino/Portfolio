<template>
  <div id="app">
      <router-view/>
      <Redes/>
  </div>
</template>

<script>
import Redes from '@/components/Redes.vue'

export default {
  name: "App",
  components: {
    Redes,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,500;0,700;1,100;1,600&display=swap');

* {
  background-color: #0C0B09;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Barlow', sans-serif;
}
</style>
