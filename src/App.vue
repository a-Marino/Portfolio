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
  --amarillo: #DBB62E;
  --gris-fondo: #0C0B09;
  --gris-texto: #808080;
}

* {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: 'Gruppo', cursive;
  font-weight: bold;
}

body {
  height: 100vh;
  width: 100vw;
  background-color: var(--gris-fondo);
  box-sizing: border-box;
}

h1 {
  font-family: 'Bungee', cursive;
}

body::-webkit-scrollbar {
  width: 12px;               
}

body::-webkit-scrollbar-track {
  background: var(--gris-fondo);       
}

body::-webkit-scrollbar-thumb {
  background-color: var(--amarillo);    
}
</style>
