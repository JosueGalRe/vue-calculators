<template>
    <div class="contenedor justify-content-center">
        <b-container class="mt-6 mx-4">
            <h3 class="text-center">- Ingrese su salario -</h3>
            <b-form-input v-model="text" type="number" placeholder="Ingresa tu salario"></b-form-input>
            <p class="mt-2 text-center">Tu salario con el incremento del {{ incremento }} es de:</p>
            <h4 class="resultado text-center">${{ resultado }}</h4>
        </b-container>
        <b-alert
        :show="cuentaAlerta"
        class="position-fixed fixed-bottom m-0 rounded-0 text-center"
        style="z-index: 2000;"
        fade
        variant="danger"
        @dismiss-count-down="countDownChanged"
        >
        Error, por favor ingrese un salario válido.
        </b-alert>
    </div>
</template>

<script>
export default {
    data: function (){
        return {
            text: '',
            resultado: 0,
            incremento: '0%',
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
                let number = parseFloat(this.text);
                if (number > 0 && number < 9999999999) {
                    if (this.text > 0 && this.text < 300.00){
                        this.resultado = number + (this.text * 0.12);
                        this.incremento = '12%';
                    } else if (this.text >= 300.00 && this.text <= 500.00){
                        this.resultado = number + (this.text * 0.08);
                        this.incremento = '8%'
                    } else if (this.text > 500.00 && this.text <= 800.00){
                        this.resultado = number + (this.text * 0.07);
                        this.incremento = '7%'
                    } else if (this.text > 800.00){
                        this.resultado = number + (this.text * 0.06);
                        this.incremento = '6%'
                    } else {
                        this.resultado = 0;
                        this.incremento = '0%';
                    }
                } else {
                    this.showAlert();
                    this.text = '';
                }
            }, 1000);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
