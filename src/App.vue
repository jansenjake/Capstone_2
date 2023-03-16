<template>
  <Navbar />
  <router-view />
  <FooterComp />
</template>

<script>
import Navbar from './components/Navbar.vue'
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: { Navbar, FooterComp }
}

</script>


<style>
body {
  height: 100vh;
  background-image: linear-gradient(grey, white, black);
  background-repeat: no-repeat;
  background-size: cover;
}



</style>