<template>
    <div class="contenedor justify-content-center">
        <b-container class="mt-6 mx-4">
            <h3 class="text-center">- Calculadora de precios de llantas -</h3>
            p.
            <b-form-input v-model="text" type="number" placeholder="Ingresa la cantidad de llantas"></b-form-input>
            <p class="mt-2">El precio individual por llanta es de: ${{ precioIndividual }}</p>
            <p class="resultado">El precio total es de: ${{ resultado }}</p>
        </b-container>
        <b-alert
        :show="cuentaAlerta"
        class="position-fixed fixed-bottom m-0 rounded-0 text-center"
        style="z-index: 2000;"
        fade
        variant="danger"
        @dismiss-count-down="countDownChanged"
        >
        Error, por favor ingrese una precio válido.
        </b-alert>
    </div>
</template>

<script>
export default {
    data: function (){
        return {
            text: '',
            precioIndividual: '0',
            resultado: 0,
            cuentaAlerta: 0,
            segundosRestantes: 5,
        }
    },
    methods: {
        countDownChanged(cuentaAlerta) {
            this.cuentaAlerta = cuentaAlerta;
        },
        showAlert() {
            this.cuentaAlerta = this.segundosRestantes;
        }
    },
    watch: {
        text: function () {
            setTimeout(() => {
                let number = parseInt(this.text);
                if (number > 0 && number <= 999999999) {
                    if (number > 0 && number <= 4){
                        this.resultado = number * 150;
                        this.precioIndividual = '150.00';
                    } else if (number >= 5 && number <= 10){
                        this.resultado = number * 125;
                        this.precioIndividual = '125.00';
                    } else if (number > 10){
                        this.resultado = number * 100;
                        this.precioIndividual = '100.00';
                    }
                } else {
                    this.showAlert();
                    this.resultado = 0;
                    this.precioIndividual = '0';
                }
            }, 1000);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
