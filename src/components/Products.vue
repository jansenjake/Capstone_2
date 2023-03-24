<template>
  <div>
    <div class="line"></div>
    <div class="prod container">
      <div class="row">
        <div class="col-md-4 mt-5" v-for="item in items" :key="item.id">
          <div class="card">
            <div class="image">
              <img
                :src="item.imgUrl"
                class="card-img-top"
                alt="img"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.prodName }}</h5>
              <p class="card-text">R {{ item.price }}</p>
              <button class="cartBtn"><a href="../components/cart.vue">Add to cart</a></button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import FooterComp from './FooterComp.vue';

export default {
  name: "products",
  components: {
    FooterComp
  },
  data() {
    return {
      items: this.$store.state.products,
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const res = await axios.get(
        `https://capstone-api-3.onrender.com/product`
      );
      this.items = res.data.results;
      console.log(res);
    },
  },
};
</script>


<style scoped>
.card {
  width: 20rem;
  height: fit-content;
}

.line {
  border: 1px solid black;
  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-left: 5rem;
  margin-right: 5rem;
}

.col {
  justify-content: center;
  margin: 0;
  padding: 0;
}

.col-md-4 {
  display: flex;
  justify-content: center;
  align-content: center;
}

.cartBtn{
  background-image: linear-gradient(darkslategray, black, black, darkslategray);
  color: #ffffff;
  border-radius: 15px;
  box-shadow: 4px 3px slategray;
}

.cartBtn:hover{
  padding-left: 25px;
  padding-right: 25px;
  transition: ease 0.3s;
  box-shadow: 5px 6px darkslategray;
}

.prod {
  background-color: darkslategray;
  border-radius: 10px;
  padding-bottom: 30px;
}



button a{
  text-decoration: none;
  color: white;
}

img{
  width: 150px;
}

</style>






