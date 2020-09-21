<template>
    <div class="contenedor justify-content-center">
        <b-container class="mt-6 mx-4">
            <h3 class="text-center">- Sistema de notas -</h3>
            <p class="text-justify">Las notas ingresadas deben de comprender entre 1 y 10.</p>
            <b-row>
                <b-col class="pl-3" cols="12">
                    <b-form-input v-model="text" type="number" placeholder="Ingresa la nota"></b-form-input>
                </b-col>
                <b-col class="mt-3 text-right" cols="12">
                    <b-button @click="ingresarNota()" pill>Ingresar nota</b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="mt-4">
                    <h4>Notas de alumnos entre:</h4>
                    <p class="resultado">1 y 3.9: {{ rangos.rango1 }}</p>
                    <p class="resultado">4 y 5.9: {{ rangos.rango2 }}</p>
                    <p class="resultado">6 y 7.9: {{ rangos.rango3 }}</p>
                    <p class="resultado">8 y 8.9: {{ rangos.rango4 }}</p>
                    <p class="resultado">9 y 10.0: {{ rangos.rango5 }}</p>
                </b-col>
            </b-row>
        </b-container>
        <b-alert
        :show="cuentaAlerta"
        class="position-fixed fixed-bottom m-0 rounded-0 text-center"
        style="z-index: 2000;"
        fade
        variant="danger"
        @dismiss-count-down="countDownChanged"
        >
        Error, por favor ingrese una nota válida.
        </b-alert>
    </div>
</template>

<script>
export default {
    data: function (){
        return {
            text: undefined,
            precioIndividual: '',
            resultado: 0,
            rangos: {
                rango1: 0,
                rango2: 0,
                rango3: 0,
                rango4: 0,
                rango5: 0
            },
            notas: [],
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
        ingresarNota() {
            if (this.text != undefined && this.text <= 10 && this.text >= 1) {
                console.log(this.text);
                let number = parseFloat(this.text);
                this.notas.push(number);
                this.rangos= {
                    rango1: 0,
                    rango2: 0,
                    rango3: 0,
                    rango4: 0,
                    rango5: 0
                };
                this.notas.forEach(nota => {
                    if (nota >= 1 && nota <= 3.9) {
                        this.rangos.rango1++;
                    } else if (nota >= 4 && nota <= 5.9) {
                        this.rangos.rango2++;
                    } else if (nota >= 6 && nota <= 7.9) {
                        this.rangos.rango3++;
                    } else if (nota >= 8 && nota <= 8.9) {
                        this.rangos.rango4++;
                    } else {
                        this.rangos.rango5++
                    }
                });
            } else {
                this.text = '';
                this.showAlert();
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
