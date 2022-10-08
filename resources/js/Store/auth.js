import AuthService from "../Service/Auth.service";

const state = {
    user: null,
    loading: false,
};

const getters = {};

const actions = {
    login({ commit }, items) {
        return new Promise(async(resolve, reject) => {
            state.loading = true;
            await AuthService.login(items)
                .then((response) => {
                    if (response.data.success) {
                        console.log(response.data)
                        commit("USER_SET", response.data.payload);
                        resolve(response.data);
                    }
                }).catch((error) => {
                    reject(error);
                })
            state.loading = false;
        });
    },

    fetchUser({ commit }) {
        return new Promise(async(resolve, reject) => {
            state.loading = true;
            await AuthService.fetchUser()
                .then((response) => {
                    if (response.data.success) {
                        commit("USER_SET", response.data.user);
                        resolve(response.data);
                    }
                }).catch((error) => {
                    reject(error);
                })
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