<template>
    <div>
<form>
    <h1>Register</h1>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
    <label for="surname">Surname</label>
    <input type="text" id="surname" name="surname" required>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" required>
    <label for="gender">Gender</label>
    <input type="radio" id="male" name="gender" value="male" required>
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    <br><br>
    <input type="submit" value="Submit">
</form>
    </div>
</template>

<script>
    export default {
        name: 'register'
    }
</script>

<style>

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
    
    /* input[type="radio"] {
      margin-right: 10px;
    } */
    
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

</style>