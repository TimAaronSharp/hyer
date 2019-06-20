<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
  name: "app",
  // components: {
    // Home,
    // Reunion,
    // FamilyTree
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.navbar{
  display: inline-flex;
  background:black;
  height:10vh;
  width:100vw;
  margin-bottom:7vh;
  justify-content:space-around;
}
html{
  background-color:#18abe0;
  margin:0;
}
body{
  margin:0;
}
</style>
