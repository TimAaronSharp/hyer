<template>
  <div class="reunion">
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
    <h2>This section is currently empty, but will later be used to host images and other things from reunions. Check back later!</h2>
  </div>
</template>

<script>
export default {
  name: "Reunion",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
