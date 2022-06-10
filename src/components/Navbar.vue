<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
<<<<<<< HEAD
  <img src="../assets/images/logo.png" alt="" class="nav-img">
=======
  <a class="navbar-brand" href="#"><img src="eco-fc20/images/logo.png" alt=""></a>
>>>>>>> e6870aa5e8ff88bd57e429d77d757d95367ca959
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
       <router-link :to="{name : 'home' }" class="nav-link"> Home </router-link> <span class="sr-only">(current)</span>
      </li>
      <li class="nav-item active">
        <router-link :to="{name :'navigation'}" class="nav-link"  >Navigation </router-link>
      </li>
      <li class="nav-item active">
        <router-link :to="{name: 'chat'}" class="nav-link">Chat </router-link>
      </li>
      <li class="nav-item active">
        <router-link :to="{name: 'blogs'}" class="nav-link" >Blogs </router-link>
      </li>
      <li class="nav-item active">
        <router-link :to="{name:'funding'}" class="nav-link"> Funding </router-link>
      </li>
     
    </ul>
  </div>
</nav>
</template>

<style>
.navbar{
    background: #46321a !important;
}

.navbar-light .navbar-nav .active>.nav-link{
        color: #fff !important;
        margin-right: 2rem;
        font-size: 1.2rem;
        font-weight: 500 !important;
}

<<<<<<< HEAD
.nav-img{
    height: 3.8rem;
    width: 3.8rem;
    margin-right: 3rem;
    background: #fff;
    border-radius: 50%;
    border: none;
}



=======
.navbar-brand{
    height: 3.5rem;
    width: 3.5rem;
    z-index: 1;
    background: #fff;
    border-radius: 50%;
    margin-right: 3rem;
}

>>>>>>> e6870aa5e8ff88bd57e429d77d757d95367ca959
.navbar-light .navbar-nav .active>.nav-link:hover{
    color: #E9EFC0 !important;
}
</style>