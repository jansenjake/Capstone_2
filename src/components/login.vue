<template>
  <div>
    <form class="log">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="payload.emailAdd"
          aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="payload.userPass">
      </div>
      <p>Don't have an account? <a href="/registerView">Register here</a></p>
      <button id="btnSub" type="submit" class="btn btn-primary" v-on:click="login(payload)">Submit</button>
    </form>
  </div>

  <!-- <form class="log">
            <h2>Login</h2>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="payload.emailAdd" name="email" >
            <label for="password">Password</label>
            <input type="password" id="password" v-model="payload.userPass" name="password"/>
            <input class="submit" type="submit" v-on:click="login(payload)" value="Login">
          <p>Don't have an account? <a href="/registerView">Register here</a></p> 
        </form> -->
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
// import { Ref } from 'vue';
export default {
  // name: 'login',
  setup() {
    let store = useStore();
    // let spinner = ref(false);
    let router = useRouter();

    const payload = {
      emailAdd: '',
      userPass: ''
    };
    async function login(payload) {
      // spinner.value = !spinner.value;
      let loginPayload = {
        'emailAdd': payload.emailAdd,
        'userPass': payload.userPass
      };
      await store.dispatch('login', loginPayload);
      localStorage.setItem('user', JSON.stringify(await store.state.user));
      // spinner.value = !spinner.value;
      router.push({ name: 'home', path: '/' })
        .then(() => location.reload());
    }
    return {
      login,
      // spinner,
      payload
    }
  }

}

</script>

<style>
.log {
  margin: 50px auto;
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  animation: forwards 2s;
  animation-name: cardForm2;
}

@keyframes cardForm2 {
  0% {
    background-color: black;
    opacity: 0.7;
  }

  25% {
    background-color: darkslategray;
    opacity: 0.8;
  }

  50% {
    background-color: grey;
    opacity: 1;
  }

  75% {
    font-size: x-large;
    color: aqua;
  }
}

.form-label {
  font-size: larger;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
}

.btnSub{
  width: 100%;
  padding: 10px;
  border: none;
  background-color: darkslategray;
  color: #fff;
  border-radius: 10px;
  transition: background-color 0.5s ease;
}

.submit:hover {
  background-color: #081311;
}
</style>