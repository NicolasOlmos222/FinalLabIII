<template>
  <div v-if="valor" class="contenedor">
    <form @submit.prevent="submitForm" class="formularios">
      <div>
        <label for="criptomoneda">Criptomoneda a operar:</label>
        <select id="criptomoneda" v-model="formulario.criptomoneda" required>
          <option value="btc">Bitcoin (BTC)</option>
          <option value="eth">Ethereum (ETH)</option>
          <option value="usdt">Tether (USDT)</option>
        </select>
      </div>
      <div class="campo">
        <label for="cantidad">Monto en $:</label>
        <input type="number" id="cantidad" v-model.number="formulario.cantidad" required>
      </div>
      <button type="submit">Comprar</button>
    </form>
  </div>

  <div v-else class = "contenedor">
    <form @submit.prevent="submitForm">
      <div>
        <label for="criptomoneda">Criptomoneda a operar:</label>
        <select id="criptomoneda" v-model="formulario.criptomoneda" required>
          <option value="btc">Bitcoin (BTC)</option>
          <option value="eth">Ethereum (ETH)</option>
          <option value="usdt">Tether (USDT)</option>
        </select>
      </div>
      <div class="campo">
        <label for="cantidad">Monto en $:</label>
        <input type="number" id="cantidad" v-model.number="formulario.cantidad" required>
      </div>
      <button type="submit">Vender</button>
    </form>
  </div>

</template>

<script>
    // Importar el decorador 'defineComponent' de Vue
    import { defineComponent } from 'vue';

    export default defineComponent({
      // Definir las propiedades del componente
      props: {
          // Definir una propiedad llamada 'valor' que puede ser de cualquier tipo
          valor: {
          type: [Boolean],
          required: true // Indicar que la propiedad es obligatoria
          }
      },

      data() {
        return {
          formulario: {
            criptomoneda: 'btc',
            cantidad: null
          }
        };
      },
      methods: {
        submitForm() {
          // Aquí puedes manejar la lógica para enviar el formulario
          alert('Formulario enviado:', this.formulario);
        }
      }
    });
</script>


<style scoped>
.contenedor{
  display: flex;
  justify-content: center;
  align-items: center;
}

div{
  display: flex;
  justify-content: center;
  text-align: center;
}

.formulario {
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.campo {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  margin: 10px;
}

input,
select {
  width: 100%;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>