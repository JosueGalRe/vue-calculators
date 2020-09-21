<template>
    <div class="contenedor justify-content-center">
        <b-container class="mt-6 mx-4">
            <h3 class="text-center">- English for Us -</h3>
            <b-row class="mb-4">
                <b-col class="pl-3" cols="12">
                    <p class="text-center">Ingresa las notas del examen #{{exam}}, del estudiante #{{count}}</p>
                    <b-form-input v-model="text" type="number" placeholder="Ingresa la nota"></b-form-input>
                </b-col>
                <b-col class="mt-2 text-right">
                    <b-button :disabled="disabled" @click="ingresarNumero()" pill>Ingresar nota</b-button>
                </b-col>
            </b-row>
            <div class="mb-3">
                <h1 class="mt-2">Estadísticas:</h1>
                <div v-for="(nota, exam) in mayoresCal" :key="exam" class="mb-3">
                    <h4 class="my-0">Examen {{exam}}</h4>
                    <p class="my-0">Mayor nota del examen: {{nota}}</p>
                </div>
                <h5 class="my-3">Nota más baja: {{menorCal}}</h5>
            </div>
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
            notas: {
                1: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                },
                2: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                },
                3:{
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                },
            },
            text: undefined,
            disabled: false,
            exam: 1,
            count: 1,
            mayoresCal: {
                1: 0,
                2: 0,
                3: 0,
            },
            menorCal: 0,
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
        ingresarNumero(){
            if (this.text != undefined && this.text.trim() != '' && this.text >= 1 && this.text <= 10) {
                let nota = parseFloat(this.text);

                this.notas[this.exam][this.count] = nota;

                this.count++;

                if (this.count == 6) {
                    this.count = 1;
                    this.exam++;
                }

                if (this.exam == 4){
                    this.disabled = true;
                    this.calc();
                }

            } else this.showAlert();
            this.text = '';
        },
        calc(){
            console.log(this.notas);
            let tempArr = [];
            Object.entries(this.notas).forEach(([exam, object]) => {
                let highest = Object.keys(object);

                highest.sort(function(a, b) {return object[a] - object[b]});
                Object.entries(object).forEach(([student, nota]) => {
                    tempArr.push(nota);
                    if (student == highest[highest.length - 1]) {
                        this.mayoresCal[exam] = nota;
                    }
                });
            });
            this.menorCal = tempArr.reduce((a, b) => Math.min(a, b));
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
