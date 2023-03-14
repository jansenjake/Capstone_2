<template>

<div>
  <Navbar/>
  <AllProducts/>
  <AboutView/>
</div>

</template>

<script>
import Navbar from './components/Navbar'
import AboutView from './views/AboutView.vue';
import AllProducts from './views/AllProducts.vue';

export default {
  name: 'App',
  components: { Navbar, AllProducts, AboutView }
}

</script>