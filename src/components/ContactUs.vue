<template>
    
    <div class="form">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Your Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Give us your feedback</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button class="submit" type="submit">Submit</button>
        </div>
    </div>


</template>

<script>
export default {
    name: 'contactUs',
}
</script>

<style>

.form{
    padding: 25px;
    background-color: grey;
    border-radius: 20px;
    margin: 50px;
    animation: forwards 2s;
    animation-name: cardForm;
}

@keyframes cardForm {
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

.submit{
  margin-top: 20px;
  width: 100px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  color: #ffff;
  background-color: darkslategray;
}

input{
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
}

textarea{
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
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