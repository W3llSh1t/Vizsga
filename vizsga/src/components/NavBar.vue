<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <RouterLink id="fooldal" class="nav-link mx-5" to="/">Főoldal</RouterLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div  class="collapse navbar-collapse mx-3" id="navbarSupportedContent">
    <ul  class="navbar-nav mr-auto">
      <li class="nav-item">
        <RouterLink class="nav-link" aria-current="page" to="/login">Belépés</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link"  to="/reg">Regisztráció</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link"  to="/other">Elérhetőségek</RouterLink>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
import {RouterLink} from 'vue-router';
export default{
    
    name: "NavBar",
    components:{
        RouterLink
    }
}
</script>
<style scoped>
nav{
    background-color: slateblue !important;
    color: white;
}

.nav-link{
    color: white;
}

</style>