/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue").default;

// Vuex
import store from "./Store";

// Vue Router
import router from "./Router/index";

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Guest
Vue.component("GuestTopBar", require("./Layouts/GuestTopBar.vue").default);
Vue.component("Login", require("./Components/Auth/Login.vue").default);
// Auth User Home

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vuetify from "vuetify";
import Vue from "vue";

Vue.use(Vuetify);

import App from "./layouts/App.vue";

const app = new Vue({
    router,
    store,
    el: "#app",
    vuetify: new Vuetify(),
    components: { App }
});