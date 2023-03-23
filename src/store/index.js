
import { createStore } from 'vuex'


import axios from 'axios'
const BuyTimeURL = "https://capstone-api-3.onrender.com/"
export default createStore({
  state: {
    products: null,
    user: null,
    users: null,
    jwToken: null,
    msg: null

  },
  getters: {
  },
  mutations: {
    setProducts(state, value){
      state.products = value
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user = user
    },
    setToken: (state, jwToken) => {
      state.jwToken = jwToken;
    },
    setMsg: (state, msg) => {
      state.msg = msg
    }

  },  
  actions: {
    async register(context, payload){
      const res = await axios.post(`${BuyTimeURL}/register`, payload);
      let {err, results } = await res.data;
      if (results) {
        context.commit('setUsers', results);
      } else {
        context.commit('setMsg', err);
      }
    },
    async login(context, payload){
      console.log(payload);
      const res = await axios.post(`${BuyTimeURL}/login`, payload);
      let {err, results, jwToken } = await res.data;
      if (results) {
        console.log(results);
        context.commit('setUser', results);
        context.commit('setToken', jwToken);
      } else {
        console.log(err);
        context.commit('setMsg', err);
      }
    },
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


