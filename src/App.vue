<template>

  <Navbar/>
  <router-view/>
</template>

<script>
  import Navbar from '../src/components/Navbar.vue'
  
  export default{
    components:  { Navbar }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

<<<<<<< HEAD
body{
  background-color: #fff;
}

=======
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
>>>>>>> e6870aa5e8ff88bd57e429d77d757d95367ca959
</style>
