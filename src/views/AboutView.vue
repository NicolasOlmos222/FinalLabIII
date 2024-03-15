<template>
  <div>
    <nav class="navbar">
      <div class="nav-left">
        <router-link to="/" class="decorate">COMPRA</router-link>
      </div>
      <div class="nav-right">
        <router-link to="/about" active-class="decorateV">VENTA</router-link>
      </div>
    </nav>

    <!-- VENTA -->
    <venta/>
  </div>
</template>

<script>
import venta from '@/components/venta.vue'
export default {
  name: 'HomeView',
  components: {
    venta,
  },
}
</script>

<style>
  .navbar {
    display: flex;
    background-color: bisque;
    justify-content: space-between;
    align-items: center;
    height: 50px; /* Ajusta la altura según sea necesario */
  }

  .nav-left,
  .nav-right {
    width: 50%; /* Divide el nav en dos partes */
    text-align: center;
    font-size: 50px;
  }
  .decorateV {
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
