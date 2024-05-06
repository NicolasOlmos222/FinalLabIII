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

    <div class="contenedor">
      <useApiCripto/>
      <UseOperacion :valor="false"/>
    </div>
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
