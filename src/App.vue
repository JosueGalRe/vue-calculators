<template>
    <div id="app">
        <div class="">
            <b-navbar visible="open" class="barra mt-3 ml-2" fixed="top">
                <b-button class="burger" v-b-toggle.sidebar-1><font-awesome-icon icon="bars"/></b-button>
            </b-navbar>
            <b-sidebar header-class="barraCabeza mx-4 px-4 mt-5" sidebar-class="barraLateral" body-class="textoBarra mt-3 px-0 mx-3" v-model="open" id="sidebar-1" title="Menú" width="100%">
                <div class="px-3 py-2">
                    <nav class="mb-3">
                        <b-nav vertical>
                            <b-nav-item @click="linkClass(0)">Calculadora</b-nav-item>
                            <b-nav-item @click="linkClass(1)">Salario</b-nav-item>
                            <b-nav-item @click="linkClass(2)">Llantería</b-nav-item>
                            <b-nav-item @click="linkClass(3)">Horas Extra</b-nav-item>
                            <b-nav-item @click="linkClass(4)">Calificaciones</b-nav-item>
                            <b-nav-item @click="linkClass(5)">Frecuencias</b-nav-item>
                            <b-nav-item @click="linkClass(6)">Paridad</b-nav-item>
                            <b-nav-item @click="linkClass(7)">Beca</b-nav-item>
                            <b-nav-item @click="linkClass(8)">Vaquita feliz</b-nav-item>
                            <b-nav-item @click="linkClass(9)">English for Us</b-nav-item>
                        </b-nav>
                    </nav>
                </div>
            </b-sidebar>
        </div>
        <b-container fluid class="p-0">
            <b-tabs class="tabs" v-model="tabIndex" fill nav-wrapper-class="d-none">
                <b-tab title="Calculadora" active><Calculadora/></b-tab>
                <b-tab title="Salario"><Salario/></b-tab>
                <b-tab title="Llantería"><Llanteria/></b-tab>
                <b-tab title="Horas extras"><HorasExtra/></b-tab>
                <b-tab title="Calificaciones"><Calificaciones/></b-tab>
                <b-tab title="Frecuencias"><Frecuencias/></b-tab>
                <b-tab title="Paridad"><Paridad/></b-tab>
                <b-tab title="Beca"><Beca/></b-tab>
                <b-tab title="Vaquita feliz"><VaquitaFeliz/></b-tab>
                <b-tab title="English for us"><EnglishForUs/></b-tab>
            </b-tabs>
        </b-container>
    </div>
</template>

<script>
import Calculadora from './components/Calculadora'
import Salario from './components/Salario'
import Llanteria from './components/Llanteria'
import HorasExtra from './components/HorasExtra'
import Calificaciones from './components/Calificaciones'
import Frecuencias from './components/Frecuencias'
import Paridad from './components/Paridad'
import Beca from './components/Beca'
import VaquitaFeliz from './components/VaquitaFeliz'
import EnglishForUs from './components/EnglishForUs'

export default {
    data: function () {
        return {
            tabIndex: 0,
            open: false,
        }
    },
    components: {
        Calculadora,
        Salario,
        Llanteria,
        HorasExtra,
        Calificaciones,
        Frecuencias,
        Paridad,
        Beca,
        VaquitaFeliz,
        EnglishForUs
    },
    methods: {
      linkClass(idx) {
        this.tabIndex = idx;
        this.open = this.open ? false : true;
      }
    }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Quicksand);
body {
    margin: 0;
    padding: 0;
    background-color: #2F2B39;
    font-family: 'Quicksand', Helvetica;
    font-size: 16px;
}
button.btn-secondary:focus, button.btn-secondary.focus, button.close:focus {
    color: #7D5DFE;
    background-color: transparent;
    border-color: none;
    box-shadow: none;
}
button.btn:focus, button.btn.focus, button.close:focus {
    outline: unset;
    box-shadow: none;
}
button.burger {
    background-color: transparent;
    border: none;
    color: #7D5DFE;
}
.barra {
    background-color: transparent !important;
}
div.barraLateral {
    background-color: #2F2B39 !important;
    color: #fff !important;
}
div.textoBarra .nav-item a{
    color: #fff !important;
}
div.textoBarra .nav-item a:hover{
    color: #fff !important;
    background-color: #7D5DFE !important;
}
header.barraCabeza .bi{
    color: #fff !important;
}
.contenedor {
    display: flex;
    height: 100vh;
    font-size: 1rem;
    background-color: #2F2B39;
}
.mt-6{
    margin-top: 5rem;
}
p, h1, h2, h3, h4, h5{
    color: #fff;
}
</style>
