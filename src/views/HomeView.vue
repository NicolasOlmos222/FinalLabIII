<template>
  <div>
    <nav class="navbar">
      <div class="nav-left">
        <router-link to="/" active-class="decorateC">COMPRA</router-link>
      </div>
      <div class="nav-right">
        <router-link to="/about" class="decorate">VENTA</router-link>
      </div>
    </nav>

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
}
</script>

<style>
  .navbar {
    display: flex;
    background-image: url('../assets/fondo.png');
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    height: 50px; /* Ajusta la altura según sea necesario */
  }

  .nav-left,
  .nav-right {
    width: 50%; /* Divide el nav en dos partes */
    text-align: center;
  }

  .decorateC {
    font-size: 80px;
    color: rgb(255, 255, 255) !important;
    background-image: url('../assets/fondo2.png');

    border: 3px solid black !important;
    border-radius: 10px;
    padding-left: 30%;
    padding-right: 30%;
    font-family: monospace;
    text-decoration: none;
  }
  .decorate {
    font-size: 40px;
    color: rgb(0, 0, 0) !important;
    font-family: monospace;
    text-decoration: none;
  }
</style>
