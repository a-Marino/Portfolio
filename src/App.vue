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
  --gris-texto: #eddbb2;
  --verde: #b8bb26;
  --rojo: #cc241d;
  --agua: #689d6a;
  --violeta: #b16286;
  --naranja: #fe8019;
  --azul: #458588;
  --gris-alternativo: #928374;
}

.amarillo {
  color: var(--amarillo);
}

.verde {
  color: var(--verde);
}

.rojo {
  color: var(--rojo);
}

.agua {
  color: var(--agua);
}

.azul {
  color: var(--azul);
}

.violeta {
  color: var(--violeta);
}

.naranja {
  color: var(--naranja);
}

.gris-alter {
  color: var(--gris-alternativo);
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

h1 {
  color: var(--verde);
}

p {
  color: var(--gris-texto);
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
