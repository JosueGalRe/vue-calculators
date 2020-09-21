<template>
    <div class="contenedor justify-content-center">
        <b-container class="mt-6 mx-4">
            <h3 class="text-center mb-3">- Frecuencia de notas -</h3>
            <p class="text-justify">Las notas ingresadas deben de comprender entre 1 y 10.</p>
            <b-row class="mb-4">
                <b-col class="pl-3" cols="12">
                    <b-form-input v-model="text" type="number" placeholder="Ingresa la nota"></b-form-input>
                </b-col>
                <b-col cols="12" class="mt-3 text-right">
                    <b-button :disabled="disabled" @click="ingresarNota()" pill>Ingresar nota</b-button>
                </b-col>
            </b-row>
            <h4 class="mt-2 text-center">Notas y su frecuencia:</h4>
            <p class="text-center" v-for='(nota, index) in notasRepetidas' :key='index'>Nota: {{index}} - Repeticiones: {{nota}}</p>
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
            notas: [],
            notasRepetidas: {},
            disabled: false,
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
            if (this.text != undefined && this.text <= 10 && this.text >= 0) {
                let number = parseInt(this.text);
                if (number != 0){
                    this.notas.push(number);
                    const contar = notas =>
                        notas.reduce((a, b) => ({ ...a,
                            [b]: (a[b] || 0) + 1
                        }), {});
                    this.notasRepetidas = contar(this.notas);
                } else
                    this.disabled = true;
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
