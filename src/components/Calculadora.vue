<template>
  <div class="calculadora">
      <b-container class="align-self-end px-4 pb-2 py-2">
        <b-container class="p-0" fluid>
            <b-col class="px-3 pb-0 mb-n3" style="z-index: 999;">
                <input class="valorTemporal" v-model="operacionActual" readonly>
            </b-col>
            <b-col class="px-3 pb-0 mb-0">
                <input class="resultado" v-model="resultado" ref="input" readonly>
            </b-col>
        </b-container>
        <b-row>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button accion" @click="eliminarTodo()" v-ripple>AC</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button accion" @click="eliminarActual()" v-ripple>C</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button accion" @click="cambiarSignos()" v-ripple><font-awesome-icon icon="plus"/>/<font-awesome-icon icon="minus"/></button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button accion" @click="asignarOperador('%')" v-ripple><font-awesome-icon icon="percentage"/></button>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button accion" @click="asignarOperador('sqrt')" v-ripple><font-awesome-icon icon="square-root-alt"/></button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button accion" @click="asignarOperador('cbrt')" v-ripple>∛x</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button accion" @click="asignarOperador('pow')" v-ripple>x²</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button accion" @click="asignarOperador('/')" v-ripple><font-awesome-icon icon="divide"/></button>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button numero" @click="agregarNumero(7)" v-ripple>7</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button numero" @click="agregarNumero(8)" v-ripple>8</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button numero" @click="agregarNumero(9)" v-ripple>9</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button accion" @click="asignarOperador('*')" v-ripple><font-awesome-icon icon="times"/></button>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button numero" @click="agregarNumero(4)" v-ripple>4</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button numero" @click="agregarNumero(5)" v-ripple>5</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button numero" @click="agregarNumero(6)" v-ripple>6</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button accion" @click="asignarOperador('-')" v-ripple><font-awesome-icon icon="minus"/></button>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button numero" @click="agregarNumero(1)" v-ripple>1</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button numero" @click="agregarNumero(2)" v-ripple>2</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button numero" @click="agregarNumero(3)" v-ripple>3</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button accion" @click="asignarOperador('+')" v-ripple><font-awesome-icon icon="plus"/></button>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button numero" @click="agregarNumero(0)" v-ripple>0</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button numero" @click="agregarDecimal()" v-ripple>.</button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button accion" @click="eliminarNumero()" v-ripple><font-awesome-icon icon="backspace"/></button>
            </b-col>
            <b-col class="tamanio p-0 m-1">
                <button class="btn button igual" @click="igual()" v-ripple><font-awesome-icon icon="equals"/></button>
            </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
export default {
    data: function (){
        return {
            resultado: '0',
            operacionActual: '0',
            operando: false,
            regEx: [ /\((\d*|\.)\)\^2/, /sqrt\((\d*|\.)\)/, /cbrt\((\d*|\.)\)/ ],
            obtuvoResultado: false,
            pow: false,
        }
    },
    methods: {
        agregarDecimal(){
            if (this.pow == false) {
                let tempData = this.operacionActual.split(' ');
                this.operacionActual += !tempData[tempData.length - 1].includes('.') ? '.': '';
            }
        },
        eliminarNumero(){
            if (this.operacionActual[this.operacionActual.length - 1] != ' '){
                if (this.operacionActual[this.operacionActual.length - 1] != ')' && (this.operacionActual[this.operacionActual.length - 1] != '2' && this.operacionActual[this.operacionActual.length - 2] != '^')) {
                    this.operacionActual = this.operacionActual.slice(0, -1);
                } else {
                    let tempData = this.operacionActual.split(' ');
                    tempData[tempData.length - 1] = tempData[tempData.length - 1].replace(/(\-?\d*\.?\d*)/,'$&');
                    this.operacionActual = tempData.join(' ');
                }
            } else this.operacionActual = this.operacionActual.slice(0, -3);
        },
        eliminarTodo(){
            this.operacionActual = '0';
            this.resultado = '0';
            this.operando = false;
            this.obtuvoResultado = false;
        },
        eliminarActual(){
            let tempData = this.operacionActual.split(' ');
            tempData[tempData.length - 1] = '';
            this.operacionActual[this.operacionActual.length - 1] = '';
        },
        asignarOperador(type){
            if (this.obtuvoResultado == true){

                this.obtuvoResultado = false;
                this.operacionActual = this.resultado.toString()+'';
            }
            if (type != 'sqrt' && type != 'cbrt' && type != 'pow'){

                if (!this.operando){

                    if (this.operacionActual != '0'){
                        this.operando = true;
                        this.operacionActual += ' '+type+' ';
                    }
                } else {

                    let tempData = this.operacionActual.split(' ');

                    if (isNaN(tempData[tempData.length - 2])){
                        tempData[tempData.length - 2] = type;
                        this.operacionActual = tempData.join(' ');
                    }
                }
            } else {
                if (this.pow == false){
                    let tempData = this.operacionActual.split(' ');

                    if (tempData[tempData.length - 1] != '' && tempData[tempData.length - 1] != '0'){
                        tempData[tempData.length - 1] = type == 'sqrt' ? 'sqrt('+tempData[tempData.length - 1]+')' :
                        (type == 'cbrt' ? 'cbrt('+tempData[tempData.length - 1]+')' : '('+tempData[tempData.length - 1]+')^2');
                        this.operacionActual = tempData.join(' ');
                    }

                    this.pow = true;
                }
            }
        },
        agregarNumero(number){
            this.operando = false;
            this.pow = false;
            if (this.operacionActual != '0')
                this.operacionActual += number.toString();
            else this.operacionActual = number.toString();
        },
        igual(){
            if(this.operacionActual != '0'){

                if (this.operacionActual[this.operacionActual.length - 1] != ' '){

                    let tempData = this.operacionActual.split(' ');
                    let nuevoArray = [];

                    tempData.forEach(dato => {
                        let value = '';
                        let pow = 0;

                        for (const [index, reg] of this.regEx.entries()) {

                            if (dato.match(reg)){

                                value = reg.exec(dato)[1];
                                pow = index == 0 ? '2' : index == 1 ? '1/2' : '1/3';
                                value = `Math.pow(${value},${pow})`;

                                break;
                            } else value = dato;
                        }

                        nuevoArray.push(value);
                    });
                    this.obtuvoResultado = true;
                    this.resultado = eval(nuevoArray.join(' '));
                }
            }
        },
        cambiarSignos(){
            this.resultado *= -1;
        }
    },
    watch: {
        operacionActual: function() {
            if (this.operacionActual == '')
                this.operacionActual = '0';
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url(https://fonts.googleapis.com/css?family=Quicksand);
.calculadora {
    display: flex;
    height: 100vh;
    background-color: #2F2B39;
    color: #fff;
    font-family: inherit;
    font-weight: 300;
}
input.resultado, input.valorTemporal{
    border: none;
    background-color: #2F2B39;
    color: #fff;
    width: 100%;
    text-align: right;
    padding: 0px;
}
input.resultado:focus, input.valorTemporal:focus{
    outline: none;
}
.resultado {
    font-size: 4rem;
}
.valorTemporal {
    font-size: 1rem;
}
.tamanio{
    height: 11vh;
    width: 100%;
}
button.button svg {
    font-size: 1.5rem;
}
button.button {
    width: 100%;
    height: 100%;
    font-weight: bold;
    cursor: pointer;
    background-color: #2F2B39;
    color: #fff;
    font-size: 2rem;
}
button.button.numero {
    background-color: #2F2B39;
    color: #fff;
}
button.button.igual {
    background-color: #7D5DFE;
    border-radius: 10px;
}
button.button.accion {
    color: #7D5DFE;
}
</style>
