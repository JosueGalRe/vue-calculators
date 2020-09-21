<template>
    <div class="contenedor justify-content-center">
        <b-container class="mt-6 mx-4">
            <h3>- Paridad de números -</h3>
            <b-row class="mb-4">
                <b-col class="pl-3" cols="12">
                    <b-form-input v-model="text" type="number" placeholder="Ingresa el numero"></b-form-input>
                </b-col>
                <b-col cols="12" class="mt-3 text-right">
                    <b-button :disabled="disabled" @click="ingresarNumero()" pill>Ingresar numero</b-button>
                </b-col>
            </b-row>
            <h4 class="mt-2 text-center">Paridad de los números ingresados:</h4>
            <b-col>
                <p>Números pares: {{pares}}</p>
                <p>Números pares: {{impares}}</p>
            </b-col>
        </b-container>
        <b-alert
        :show="cuentaAlerta"
        class="position-fixed fixed-bottom m-0 rounded-0 text-center"
        style="z-index: 2000;"
        fade
        variant="danger"
        @dismiss-count-down="countDownChanged"
        >
        Error, por favor ingrese un número válido.
        </b-alert>
    </div>
</template>

<script>
export default {
    data: function (){
        return {
            text: '',
            disabled: false,
            numeros: [],
            impares: 0,
            pares: 0,
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
        },
        ingresarNumero() {
            if (this.text != undefined && this.text <= 10 && this.text >= 1) {
                if (this.numeros.length < 10){
                    let number = parseInt(this.text);

                    this.numeros.push(number);

                    if (number % 2 == 0)
                        this.pares++;
                    else
                        this.impares++;
                    this.text = '';
                } else this.disabled = true;
            } else {
                this.showAlert();
                this.text = '';
            }
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
