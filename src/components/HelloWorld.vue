<template>
  <div class="hello">
    <h1>Información de Cripto</h1>
    <p>Ask: {{ ask }}</p>
    <p>Bid: {{ bid }}</p>
    <p>Última actualización: {{ lastUpdated }}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    
  },
  data() {
    return {
      ask: null,
      bid: null,
      lastUpdated: null
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://criptoya.com/api/argenbtc/btc/ars/0.5');
        const data = response.data;
        this.ask = data.ask;
        this.bid = data.bid;
        this.lastUpdated = new Date(data.time * 1000); // Convertir a formato de fecha
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-image: url('../assets/fondo.png');
  border-radius: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
