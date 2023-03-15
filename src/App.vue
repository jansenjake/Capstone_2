<template>

<div>
  <Navbar/>
  <Products/>
  <AboutView/>
  <FooterComp/>
</div>

</template>

<script>
import Navbar from './components/Navbar'
import AboutView from './views/AboutView.vue';
import Products from './components/Products.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: { Navbar, Products, AboutView , FooterComp }
}

</script>


<style>

body{
  background-image: linear-gradient(grey, white, black);
}

</style>