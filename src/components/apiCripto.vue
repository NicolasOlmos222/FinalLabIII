<template>
    <div class="muestra">
        <h1>BitCoins:</h1>
        <p>Compra: $ {{ askBTC }}</p>
        <p>Venta: $ {{ bidBTC }}</p>

        <h1>Ethereum:</h1>
        <p>Compra: $ {{ askETH }}</p>
        <p>Venta: $ {{ bidETH }}</p>

        <h1>USDT:</h1>
        <p>Compra: $ {{ askUSDT }}</p>
        <p>Venta: $ {{ bidUSDT }}</p>

        <p>Última actualización: {{ lastUpdated }}</p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
    name: 'apiCripto',
    props: {
        
    },
    data() {
        return {
        askBTC: null,
        bidBTC: null,

        askETH: null,
        bidETH: null,

        askUSDT: null,
        bidUSDT: null,

        lastUpdated: null
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
        try {
            let response = await axios.get('https://criptoya.com/api/argenbtc/btc/ars/0.5');
            let data = response.data;
            this.askBTC = data.ask;
            this.bidBTC = data.bid;

            response = await axios.get('https://criptoya.com/api/argenbtc/eth/ars/0.5');
            data = response.data;
            this.askETH = data.ask;
            this.bidETH = data.bid;

            response = await axios.get('https://criptoya.com/api/argenbtc/eth/ars/0.5');
            data = response.data;
            this.askUSDT= data.ask;
            this.bidUSDT = data.bid;

            this.lastUpdated = new Date(data.time * 1000); // Convertir a formato de fecha
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        },
    },
    }
</script>

<style>
    template{
        display: flex;
    }
    .muestra{
        width: 40%;
        justify-content: left;
        text-align: left;
    }
    .muestra p, h1{
        margin: 5px 0;
        color: rgb(185, 185, 185);
    }
</style>