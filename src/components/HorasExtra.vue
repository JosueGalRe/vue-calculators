<template>
    <div class="contenedor justify-content-center">
        <b-container class="mt-6 mx-4">
            <h3 class="text-center">- Calculadora de pago por horas extra -</h3>
            <b-container class="my-3">
                <b-row class="mb-3">
                    <b-col>
                        <b-form-input v-model="horas" type="number" placeholder="Cantidad de horas extra"></b-form-input>
                    </b-col>
                    <b-col>
                        <b-form-input v-model="salario" type="number" placeholder="Ingresa su salario"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-3 mb-4">
                    <b-col>
                        <b-form-select v-model="selected" :options="options"></b-form-select>
                    </b-col>
                </b-row>
                <h4 class="resultado">Tu salario con el aumento es de: ${{ resultado }}</h4>
            </b-container>
        </b-container>
        <b-alert
        :show="cuentaAlerta"
        class="position-fixed fixed-bottom m-0 rounded-0 text-center"
        style="z-index: 2000;"
        fade
        variant="danger"
        @dismiss-count-down="countDownChanged"
        >
        Error, por favor ingrese correctamente todos los campos.
        </b-alert>
    </div>
</template>

<script>
export default {
    data: function (){
        return {
            horas: undefined,
            salario: undefined,
            resultado: 0,
            incremento: '0%',
            selected: null,
            options: [
                { value: null, text: 'Selecciona la categoría del empleado' },
                { value: 1, text: 'Categoría 1' },
                { value: 2, text: 'Categoría 2' },
                { value: 3, text: 'Categoría 3' },
            ],
            cuentaAlerta: 0,
            segundosRestantes: 5,
        }
    },
    watch: {
        horas: function () {
            this.calc();
        },
        salario: function () {
            this.calc();
        },
        selected: function () {
            this.calc();
        }
    },
    methods: {
        countDownChanged(cuentaAlerta) {
            this.cuentaAlerta = cuentaAlerta;
        },
        showAlert() {
            this.cuentaAlerta = this.segundosRestantes;
        },
        calc(){
            if (this.salario != undefined && this.horas != undefined && this.selected != null){
                let pagoHoras = 0;
                let salario = parseFloat(this.salario);
                let horas = parseInt(this.horas);

                switch (this.selected){
                    case 1:
                        pagoHoras = 40;
                        break;
                    case 2:
                        pagoHoras = 50;
                        break;
                    case 3:
                        pagoHoras = 85;
                        break;
                }
                this.resultado = this.horas <= 30 ? (salario + (horas * pagoHoras)) : (salario + 30 * pagoHoras);
            } else {
                this.showAlert();
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
