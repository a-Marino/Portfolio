<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gruppo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

/* Variables de colores */
:root {
  --amarillo: #FFBB00;
  --gris-fondo: #1d2021;
}

.amarillo {
  color: var(--amarillo);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
  width: 100%;
  background-color: var(--gris-fondo);
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  width: 12px;               
}

body::-webkit-scrollbar-track {
  background: var(--gris-fondo);       
}

body::-webkit-scrollbar-thumb {
  background-color: var(--gris-alternativo);  
}
</style>
