
import { createStore } from 'vuex'


import axios from 'axios'
const BuyTimeURL = "https://capstone-api-3.onrender.com/"
export default createStore({
  state: {
    products: null,
  },
  getters: {
  },
  mutations: {
    setProducts(state, value){
      state.products = value
    }
  },
  actions: {
    async fetchProducts(context){
      const res = await axios.get(`${BuyTimeURL}products`)
      const {results, err} = await res.data;
      if (results) {
        context.commit('setProducts', results)
      } else {
        context.commit(err)
      }
    }
  },
  modules: {
  }
})


