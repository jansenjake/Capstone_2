<template>

<div class="home">
<h1 class="message">Timeless elegance at your fingertips.</h1>
<h1 class="messageTwo">Experience the perfect fusion of style and function.</h1>
</div>



</template>

<script>

export default {
  name: 'HomeView'
}

</script>

<style>

.message {
  color: black;
  transform: skew(-20deg);
  animation-name: shift;
  animation-duration: 5s;
  animation-fill-mode: forwards;
  text-align: center;
  margin-top: 3%;
}

@keyframes shift {
  20% {
    transform: skew(-20deg);
    color: blue;
  }
  90% {
    transform: skew(20deg);
  }
  100%{
    opacity: 0;
  }
}

.messageTwo{
  text-align: center;
  animation: textTwo 3s ease ;
  color: black;
}

@keyframes textTwo {
  0% {
    opacity: 0;
    transform: translateX(-100px);
    color: aqua;
  }
  50% {
    opacity: 1;
    transform: translateX(10px);
    
  }
  75% {
    transform: translateX(-5px);
    
  }
  100% {
    transform: translateX(0px);
    
  }
}



</style>