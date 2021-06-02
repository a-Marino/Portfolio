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
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,500;0,700;1,100;1,600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gruppo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

* {
  background-color: #0C0B09;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* font-family: 'Barlow', sans-serif; */
  font-family: 'Gruppo', cursive;
  font-weight: bold;
  overflow-x: hidden;
}

body {
  height: 100vh;
  width: 100vw;
}

h1 {
  font-family: 'Bungee', cursive;
}

body::-webkit-scrollbar {
  width: 12px;               
}

body::-webkit-scrollbar-track {
  background: #0C0B09;       
}

body::-webkit-scrollbar-thumb {
  background-color: #dbb62e;    
}
</style>
