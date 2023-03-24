<template>
  <div>
    <form class="text-white" >
      <h1>Register</h1>
      <label for="exampleInputFirstName">Name</label>
      <input type="text" id="name" v-model="payload.firstName" name="name" required autocomplete="off">
      <label for="surname">Surname</label>
      <input type="text" id="surname" v-model="payload.lastName" name="surname" required autocomplete="off">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="payload.emailAdd" name="email" required autocomplete="off">
      <label for="exampleInputPassword">Password</label>
      <input type="password" id="password" v-model="payload.userPass" name="password" required autocomplete="off">
      <label class="gender" for="gender">Gender</label>
      <select class="drop" name="gender" id="gender" v-model="payload.gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br>
      <br>
      <input type="submit" v-on:click="($event) => 'register'(payload)" value="Submit">
    </form>
  </div>
</template>

<script>

import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import {ref} from 'vue';
export default {
  name: 'register',
  setup (){
    let store = useStore();
    let router = useRouter();
    let spinner = ref(false);

    const payload = {
      firstName: '',
      lastName: '',
      emailAdd: '',
      userPass: '',
      gender: ''
    };
    async function register(payload){
      spinner.value = !spinner.value
      await store.dispatch('register', payload);
      router.push({name: 'home', path: '/'})
      .then(()=>location.reload);
    }
    return{
      register,
      payload
    }
  }
}
</script>

<style scoped>
body {

  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  margin: 0;
}

form {
  max-width: 500px;
  margin: 50px auto;
  padding: 40px;
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
}

label {
  display: block;
  margin-bottom: 10px;
  text-align: left;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background-color: #2b2b2b;
  color: #fff;
  font-size: 16px;
}


input {
  background-color: darkslategrey;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

input:hover {
  background-color: #555;
}

h1 {
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: normal;
}

.drop{
  width: 150px;
}

.gender{
  text-align: center;
}
</style>