import UserService from "../Service/User.service";

const state = {
    loading: false,
    expertiseAll: null,
};

const getters = {};

const actions = {
    InsertExpertise({ commit }, user_expertise) {
        return new Promise(async (resolve, reject) => {
            commit("LOADING_SET", true);
            await UserService.InsertExpertise(user_expertise)
                .then((response) => {
                    if (response.data.success) {
                        state.expertiseAll.push(response.data.payload);
                        resolve(response.data);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
            commit("LOADING_SET", false);
        });
    },

    fetchAllExpertise({ commit }) {
        return new Promise(async (resolve, reject) => {
            commit("LOADING_SET", true);
            await UserService.fetchAllExpertise()
                .then((response) => {
                    if (response.data.success) {
                        commit("EXPERTISE_ALL_SET", response.data.payload);
                        resolve(response.data);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
            commit("LOADING_SET", false);
        });
    },

    deleteUserExpertise({ commit }, id) {
        return new Promise(async (resolve, reject) => {
            commit("LOADING_SET", true);
            await UserService.deleteUserExpertise(id)
                .then((response) => {
                    if (response.data.success) {
                        resolve(response.data);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
            commit("LOADING_SET", false);
        });
    },
};

const mutations = {
    EXPERTISE_ALL_SET(state, response) {
        state.expertiseAll = response;
    },
    LOADING_SET(state, response) {
        state.loading = response;
    },
};

export default {
    namespaced: "user",
    state,
    getters,
    actions,
    mutations,
};
