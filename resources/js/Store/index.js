import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import snackbar from "./helper/snackbar";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        snackbar,
    },
});
