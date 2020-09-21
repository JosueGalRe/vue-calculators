// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faPlus, faMinus, faPercentage, faSquareRootAlt, faTimes, faDivide, faBackspace, faEquals } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { VBToggle, BAlert, BFormInput, BNav, BSidebar, BButton, BContainer, BRow, BCol, BNavItem, BTab, BTabs, BNavbar, BFormSelect } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Ripple from "vue-material-design-ripple";
import "vue-material-design-ripple/dist/vue-material-design-ripple.css";

Vue.directive("ripple", Ripple);

Vue.component("b-nav", BNav);
Vue.component("b-form-input", BFormInput);
Vue.component("b-alert", BAlert);
Vue.component("b-sidebar", BSidebar);
Vue.component("b-button", BButton);
Vue.component("b-container", BContainer);
Vue.component("b-col", BCol);
Vue.component("b-row", BRow);
Vue.component("b-nav-item", BNavItem);
Vue.component("b-tabs", BTabs);
Vue.component("b-tab", BTab);
Vue.component("b-navbar", BNavbar);
Vue.component("b-form-select", BFormSelect);
Vue.directive("b-toggle", VBToggle);

library.add(
  faPlus,
  faMinus,
  faPercentage,
  faSquareRootAlt,
  faTimes,
  faDivide,
  faBackspace,
  faEquals,
  faBars
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
