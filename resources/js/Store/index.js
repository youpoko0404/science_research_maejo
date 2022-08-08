import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import parameter from "./parameter";
import dashboard from "./dashboard";
import research from "./research";
import user from "./user";

import snackbar from "./helper/snackbar";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        dashboard,
        parameter,
        snackbar,
        research,
        user,
    },
});
