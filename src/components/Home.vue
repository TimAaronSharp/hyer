<template>
  <div class="home">
    <div class="navbar">
      <div class="home-link">
        <router-link to="/">
          <h1>Home</h1>
        </router-link>
      </div>
      <div class="reunion-link">
        <router-link to="Reunion">
          <h1>Reunion</h1>
        </router-link>
      </div>
      <div class="familyTree-link">
        <router-link to="FamilyTree">
          <h1>FamilyTree</h1>
        </router-link>
      </div>
        <img class="construction" src="../assets/under-construction_geek_man_02.png" alt>
    </div>
    <h4>(This site is currently best viewed on non-mobile devices. It will be updated soon!)</h4>
    <h1>Welcome to the Clare and Yvonne Hyer family website!!!</h1>
    <img src="../assets/clare-yvonne-family.jpg" alt>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
