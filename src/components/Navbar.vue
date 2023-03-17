<template>
  <div>
    <nav class="navbar navbar-light bg-light sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand text-dark" href=""> <img class="logo" src="../assets/logo2.png" alt="logo"> </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">

            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" id="nav">
              <li class="nav-item">
                <router-link to="/" class="route-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="route-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="route-link">All Products</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/contact" class="route-link">Contact Us</router-link>
              </li>

              <li class="nav-item dropdown" id="extra">
                <a class="nav-link dropdown-toggle text-light" id="offcanvasNavbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                  <li>
                    <router-link to="/profile" class="route-link">Your Profile</router-link>
                  </li>

                  <li>
                    <router-link to="/checkout" class="route-link">Checkout</router-link>
                  </li>
                  <!-- for admin/ authorized user -->
                  <li>
                    <router-link to="/admin" class="route-link">Admin</router-link>
                  </li>
                  <li>
                    <router-link to="/login" class="route-link">Login</router-link>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn text-light" type="submit">Search</button>
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

.btn {
  border: solid white 3px;
  background-color: black;
}

.btn:hover {
  background-image: linear-gradient(darkslategray, black, black, darkslategray);
}


.logo {
  width: 50px;
  border-radius: 50%;
  animation: logoRotate 1s;
}

@keyframes logoRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

nav a{
  text-decoration: none;
}

.nav-item {
  padding: 9px;
}

.nav-item:hover {
  transition: ease 0.3s;
  background-color: black;
  border-radius: 15px;
}

.dropdown-menu {
  background-color: #000;
  padding: 9px;
  border-radius: 10px;

}

.route-link {
  display: block;
  color: white;
  text-align: center;
}

.dropdown-menu:hover {
  transition: ease 0.3s;
  border-radius: 15px;
}



</style>