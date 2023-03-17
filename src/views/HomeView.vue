<template>
  <div class="home">
    <!-- <h1>Welcome</h1> -->

<!-- <h1 class="text"></h1> -->
<!-- <img class="Watch" src="../assets/homeBG.jpg"> -->


    
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}

</script>

<style>

.home {
margin: auto;
padding: 100px 100px;
}

h1 {
  transform: skew(-20deg);
  animation-name: shift;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  
}

@keyframes shift {
  20% {
    transform: skew(-20deg);
  }
  90% {
    transform: skew(20deg);
  }
  100%{
    opacity: 0;
  }
}

.text{
  animation:forwards 3s; 
  animation-name: forwardText;
}

@keyframes forwardText{
0%{
  color: darkslateblue;
  opacity: 0.1;
}
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

/* body{
  background-image: url(../assets/homeBG.jpg);
  background-repeat: no-repeat;
  background-size: cover;
} */

</style>