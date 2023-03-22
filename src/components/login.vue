<template>
    <div>
        <form class="log">
            <h2>Login</h2>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" >
            <label for="username">Username</label>
            <input type="text" id="username" name="username">
            <label for="password">Password</label>
            <input type="password" id="password" name="password">
            <input class="submit" type="submit" value="Login">
          <p>Don't have an account? <a href="/registerView">Register here</a></p> 
        </form>
    </div>
</template>

<script>
export default {
    name: 'login'
}
</script>

<style>

.log{
  margin: 50px auto;
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  animation: forwards 2s;
  animation-name: cardForm2;
}

@keyframes cardForm2 {
    0%{
        background-color: black;
        opacity: 0.7;
    }
    25%{
        background-color: darkslategray;
        opacity: 0.8;
    }
    50%{
        background-color: grey;
        opacity: 1;
    }
    75%{
        font-size: x-large;
        color: aqua;
    }
}

.form-label{
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

.submit{
  width: 100%;
  padding: 10px;
  border: none;
  background-color: darkslategray;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.5s ease;
}

.submit:hover {
  background-color: #081311;
}



</style>