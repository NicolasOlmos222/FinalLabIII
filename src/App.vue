<template>
  <div>
    <VideoBackground v-if="mostrarL" @mostrar-m="mostrarComponenteM" />
    <router-view v-if="mostrarM"/>
  </div>
  
</template>
<script>
  import VideoBackground from '@/components/Login.vue';

  export default {
    data() {
      return {
        mostrarM: false,
        mostrarL: true
      };
    },
    methods: {
      mostrarComponenteM() {
        this.mostrarM = true;
        this.mostrarL = false;
      }
    },
    components: {
      VideoBackground
    }
  };
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
</style>
