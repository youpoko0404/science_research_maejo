import HttpRequest from "../HttpRequest/httpRequest";
const httpRequest = new HttpRequest();

const state = {
    user: null,
    loading: false,
};

const getters = {};

const actions = {
    login({ commit }, items) {
        return new Promise(async (resolve, reject) => {
            state.loading = true;
            await httpRequest
                .post("api/login", {
                    email: items.email,
                    password: items.password,
                })
                .then((response) => {
                    if (response.data.success) {
                        commit("USER_SET", response.data.payload);
                        resolve(response.data);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
            state.loading = false;
        });
    },

    fetchUser({ commit }) {
        return new Promise(async (resolve, reject) => {
            state.loading = true;
            await httpRequest
                .get("api/user")
                .then((response) => {
                    if (response.data.success) {
                        commit("USER_SET", response.data.user);
                        resolve(response.data);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
            state.loading = false;
        });
    },

    async logout({ commit }) {
        return new Promise(async (resolve, reject) => {
            state.loading = true;
            await httpRequest
                .post("api/logout")
                .then((response) => {
                    commit("USER_CLEAR");
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
            state.loading = false;
        });
    },
};

const mutations = {
    USER_SET(state, response) {
        state.user = response;
    },
    USER_CLEAR(state) {
        state.user = null;
    },
};

export default {
    namespaced: "auth",
    state,
    getters,
    actions,
    mutations,
};
