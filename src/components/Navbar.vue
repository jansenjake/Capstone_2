<template>
  <div>
  <nav class="navbar navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand text-dark" href="../views/HomeView.vue"> <img class="logo" src="../assets/logo2.png" alt="logo"> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" id="nav">
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="../views/HomeView.vue">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="../views/AllProducts.vue">All Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="../views/AboutView.vue">About</a>

          </li>
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="../views/ContactUs.vue">Contact Us</a>
          </li>

          <li class="nav-item dropdown" id="extra">
            <a class="nav-link dropdown-toggle text-light" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item text-danger" href="#">Your Profile</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item " href="#">Cart</a></li>
              <li><a class="dropdown-item " href="#">Checkout</a></li>

              <!-- for admin/ authorized user -->
              <li><a class="dropdown-item text-primary" href="#">Admin</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn text-light" type="submit" >Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
</div>
</template>
  

<script>
export default {
  name: 'Navbar'
}

</script>


  
<style>
.offcanvas {
  background-color: darkslategrey;
}

.btn{
  border: solid white 3px;
  background-color: black;
}

.btn:hover{
  background-image: linear-gradient(darkslategray, black, black, darkslategray);
}


.logo{
  width: 50px;
  border-radius: 50%;
  animation: logoRotate 1s ;
}

@keyframes logoRotate{
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}

.nav-item{
  padding-left: 9px;
}

.nav-item:hover{
  transition: ease 0.3s;
  background-color: black;
  border-radius: 15px;
}


</style>