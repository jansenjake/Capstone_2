<template>

<div>
      <section class="landing">
        <h1 class="textOne">Welcome to Buy Time </h1>
        <p class="typeOut">Discover the finest timepieces from the world's most prestigious brands.</p>
       <router-link to="/products" class="shopLink">Shop Now</router-link>
      </section>
      <section class="sectTwo">
        <h2>Our Features</h2>
        <div class="features">
          <img src="../assets/HD-wallpaper-time-is-money-time-money-motivational-thumbnail.jpg" alt="img">
          <h3>Exquisite Craftsmanship</h3>
          <p>Our watches are meticulously crafted to the highest standards of quality and design.</p>
        </div>
        <div>
          <img src="../assets/fossil.jpeg" alt="img">
          <h3>Prestigious Brands</h3>
          <p>We offer a wide range of top-end brands, including Rolex, IWC, and Fossil.</p>
        </div>
        <div>
          <img src="../assets/2.jpg" alt="img">
          <h3>Authenticity Guarantee</h3>
          <p>We stand behind the authenticity of every watch we sell.</p>
        </div>
      </section>
    </div>

</template>

<script>

export default {
  name: 'HomeView'
}

</script>

<style scoped>

body {
  background-color: #1d1d1d;
  color: #fff;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}


.landing {
  background-image: linear-gradient(white, black, white);
  border-radius: 20px;
  margin: 0;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
}

.landing h1 {
  font-size: 48px;
  margin: 0;
  text-shadow: 2px 2
}

h2{
  margin-top: 15px;
}

.sectTwo{
  text-align: center;
}

.shopLink{
  text-decoration: none;
  font-size: x-large;
  border: solid 2px white;
  border-radius: 10px;
  padding: 7px;
  background-color: darkslateblue;
  color: white;
}

.shopLink:hover{
background-color: aqua;
transition: 0.7s ease;
transform: scale(1.1);
}

img{
  width: 450px;
  border-radius: 15px;
  transform: scale(0.8);
  transition: transform 0.5s ease;
}

img:hover{
  transform: scale(1);
}

.textOne{
  font-size: 48px;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 10px aqua, 0 0 20px blue, 0 0 30px gold;
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0% {
    text-shadow: 0 0 10px aqua, 0 0 20px blue, 0 0 30px gold;
  }
  50% {
    text-shadow: 0 0 20px aqua, 0 0 30px blue, 0 0 40px gold;
  }
  100% {
    text-shadow: 0 0 10px aqua, 0 0 20px blue, 0 0 30px gold;
  }
}

.typeOut{
  font-size: 20px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #fff;
  animation: typing 3.5s steps(40);
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>