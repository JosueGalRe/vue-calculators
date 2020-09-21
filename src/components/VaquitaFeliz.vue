<template>
    <div class="contenedor justify-content-center">
        <b-container class="mt-6 mx-4">
            <h3 class="text-center">- Control de ventas: La vaquita feliz - </h3>
            <b-row class="mb-4">
                <b-col class="pl-3" cols="12">
                    <p class="text-center">Ingresa las ventas de {{producto}} en {{mes}}</p>
                    <b-form-input v-model="text" type="number" placeholder="Ingresa las ventas"></b-form-input>
                </b-col>
                <b-col class="mt-3 text-right">
                    <b-button :disabled="disabled" @click="ingresarNumero()" pill>Ingresar cantidad</b-button>
                </b-col>
            </b-row>
            <h4 class="mt-2">Estadísticas:</h4>
            <p>Ventas totales del trimestre: {{totalTrim}}</p>
            <div v-for="(prod, mes) in masVendido" :key="mes" class="mb-3">
                <h5 class="my-1">{{mes}}</h5>
                <p class="my-0">Ventas del mes: {{prod.total}}</p>
                <p class="my-0">Producto más vendido: {{prod.producto}}</p>
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
        Error, por favor ingrese una venta válida.
        </b-alert>
    </div>
</template>

<script>
export default {
    data: function (){
        return {
            masVendido: {
                'Enero': {
                    'total': 0,
                    'producto': undefined,
                },
                'Febrero': {
                    'total': 0,
                    'producto': undefined,
                },
                'Marzo':{
                    'total': 0,
                    'producto': undefined,
                },
            },
            ventas: {
                'Enero': {
                    'Leche': undefined,
                    'Crema': undefined,
                    'Queso': undefined,
                },
                'Febrero': {
                    'Leche': undefined,
                    'Crema': undefined,
                    'Queso': undefined,
                },
                'Marzo': {
                    'Leche': undefined,
                    'Crema': undefined,
                    'Queso': undefined,
                }
            },
            text: undefined,
            totalTrim: 0,
            disabled: false,
            producto: 'Leche',
            mes: 'Enero',
            nProd: 0,
            nMes: 0,
            cuentaAlerta: 0,
            segundosRestantes: 5,
        }
    },
    watch: {
        nProd: function (){
            switch (this.nProd) {
                case 0:
                    this.producto = 'Leche';
                    break;
                case 1:
                    this.producto = 'Crema';
                    break;
                case 2:
                    this.producto = 'Queso';
                    break;
            }
        },
        nMes: function (){
            switch (this.nMes) {
                case 0:
                    this.mes = 'Enero';
                    break;
                case 1:
                    this.mes = 'Febrero';
                    break;
                case 2:
                    this.mes = 'Marzo';
                    break;
            }
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
            if (this.text != undefined && this.text.trim() != '') {
                let venta = parseInt(this.text);

                this.ventas[this.mes][this.producto] = venta;

                this.nProd++;

                if (this.nProd == 3) {
                    this.nProd = 0;
                    this.nMes++;
                }

                if (this.nMes == 3){
                    this.disabled = true;
                    this.calc();
                }
            } else this.showAlert();
            this.text = '';
        },
        calc(){
            Object.entries(this.ventas).forEach(([mes, object]) => {
                let keys = Object.keys(object);

                keys.sort(function(a, b) {return object[a] - object[b]});

                Object.entries(object).forEach(([producto, venta]) => {

                    this.totalTrim += venta;

                    if (producto == keys[keys.length - 1]) {
                        this.masVendido[mes]['producto'] = producto;
                    }

                    this.masVendido[mes]['total'] += venta;
                });
            });
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
