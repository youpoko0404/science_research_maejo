import UserService from "../Service/User.service";

const state = {
    loading: false,
    search_user_expertise: null,
    expertise_exp_main_field: null,
    expertise_by_id: null,
};

const getters = {};

const actions = {
    fetchSearchUserExpertise({ commit }, q) {
        return new Promise(async (resolve, reject) => {
            commit("LOADING_SET", true);
            await UserService.searchUserExpertise(q)
                .then((response) => {
                    if (response.data.success) {
                        commit(
                            "SEARCH_USER_EXPERTISE_SET",
                            response.data.payload
                        );
                        resolve(response.data);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
            commit("LOADING_SET", false);
        });
    },

    updateExpertise({ commit }) {
        return new Promise(async (resolve, reject) => {
            commit("LOADING_SET", true);
            await UserService.updateExpertise()
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

    fetchExpertiseExpMainFieldAll({ commit }) {
        return new Promise(async (resolve, reject) => {
            commit("LOADING_SET", true);
            await UserService.fetchExpertiseExpMainFieldAll()
                .then((response) => {
                    if (response.data.success) {
                        commit(
                            "EXPERTISE_EXP_MAIN_FIELD_SET",
                            response.data.payload
                        );
                        resolve(response.data);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
            commit("LOADING_SET", false);
        });
    },

    fetchUserExpertiseById({ commit }, id) {
        return new Promise(async (resolve, reject) => {
            commit("LOADING_SET", true);
            await UserService.fetchUserExpertiseById(id)
                .then((response) => {
                    if (response.data.success) {
                        commit("EXPERTISE_BY_ID", response.data.payload);
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
    SEARCH_USER_EXPERTISE_SET(state, response) {
        state.search_user_expertise = response;
    },
    EXPERTISE_EXP_MAIN_FIELD_SET(state, response) {
        state.expertise_exp_main_field = response;
    },
    LOADING_SET(state, response) {
        state.loading = response;
    },
    EXPERTISE_BY_ID(state, response) {
        state.expertise_by_id = response;
    },
};

export default {
    namespaced: "user",
    state,
    getters,
    actions,
    mutations,
};
