<script>
import NavBar from "./components/NavBar.vue";
import {RouterView} from 'vue-router';
export default{
  components:{
    NavBar,
    RouterView,
  }
}
</script>

<template>
<NavBar/>
<main>
  <RouterView/>
</main>
</template>

<style scoped>

</style>
