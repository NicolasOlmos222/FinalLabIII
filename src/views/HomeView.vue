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
  </div>
  <div class="contenedor">
    <useApiCripto/>
    <UseOperacion :valor="true"/>
  </div>
  </template>

<script setup>
  import useApiCripto from '@/components/apiCripto.vue'
</script>

<script>
  import UseOperacion from '@/components/MiOperacion.vue'

  export default {
  components: {
    UseOperacion // Registrar el componente 'MiComponente' para poder utilizarlo
  }
  };
</script>

<style>
  .contenedor{
    display: flex;
    margin-left: 10%;
  }
  .navbar{
    display: flex;
    background-color: rgb(68, 68, 68, 0.2);
  }
  .nav-left, .nav-right{
    margin-right: 15px;
  }
</style>
