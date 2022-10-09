import UserService from "../Service/User.service";

const state = {
    loading: false,
    search_user_expertise: null,
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
};

const mutations = {
    SEARCH_USER_EXPERTISE_SET(state, response) {
        state.search_user_expertise = response;
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
