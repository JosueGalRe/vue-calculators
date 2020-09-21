<template>
    <div class="contenedor justify-content-center">
        <b-container class="mt-6 mx-4">
            <h3 class="text-center">- Ingresa las notas de la beca -</h3>
            <p class="text-justify">Las notas ingresadas deben de comprender entre 1 y 10, con un máximo de 10 notas.</p>
            <b-row class="mb-4">
                <b-col cols="12">
                    <b-form-input v-model="text" type="number" placeholder="Ingresa la nota"></b-form-input>
                </b-col>
                <b-col cols="12" class="mt-3 text-right">
                    <b-button :disabled="disabled" @click="ingresarNumero()" pill>Ingresar nota</b-button>
                </b-col>
            </b-row>
            <h4 class="mt-2 text-center">Estadísticas:</h4>
            <p>Promedio del grupo: {{promGen.toFixed(2)}}%</p>
            <p>Alumnos con notas mayores o iguales a 6: {{cantidadMayor}}</p>
            <p>Porcentaje de estudiantes aprobados: {{porApro.toFixed(1)}}%</p>
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
            promGen: 0,
            cantidadMayor: 0,
            porApro: 0,
            text: '',
            notas: [],
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
        ingresarNumero() {
            if (this.text != undefined && this.text <= 10 && this.text >= 1) {
                if (this.notas.length < 10){
                    let number = parseFloat(this.text);
                    this.notas.push(number);
                    this.text = '';
                    if (this.notas.length == 10) this.calc();
                }
            } else {
                this.text = '';
                this.showAlert();
            }
        },
        calc(){
            this.disabled = true;
            let tempData = 0;
            this.notas.forEach(nota => {
                tempData += nota;
                if (nota >= 6)
                    this.cantidadMayor++;
            });
            this.promGen = tempData / this.notas.length;
            this.porApro = this.cantidadMayor / this.notas.length * 100;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
