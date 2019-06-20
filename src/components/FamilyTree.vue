<template>
  <div class="familyTree">
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
    <img src="../assets/familyTreeNew.png" alt>
    <!-- <h3 v-for="(person) in root" :key="person.id">{{person.child}}</h3> -->
    <!-- <svg :height="height" :width="width">

    </svg>-->

    <!-- <h3 v-for = "person in familyTree"> {{person.child}} </h3> -->
  </div>
</template>

<script>
// import * as d3 from "d3";
// import * as treant from "treant-js"
export default {
  name: "FamilyTree",
  props: {
    msg: String
  },
  data() {
    return {
      loadData: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.familyTree {
  background-image: url("../assets/treeWallpaper.png");
  background-color: #18abe0;
  height: 1080;
  width: 1920;
  background-repeat: no-repeat;
  background-size: contain;
  /* background: black; */
}
</style>
