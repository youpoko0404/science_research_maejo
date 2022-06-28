import ResearchService from "../Service/Research.service";

const state = {
    loading: false,
    research: null,
    researchAll: null
};

const getters = {};

const actions = {
    save({ commit }, research) {
        return new Promise(async(resolve, reject) => {
            commit("LOADING_SET", true);
            await ResearchService.save(research)
                .then((response) => {
                    if (response.data.success) {
                        resolve(response.data);
                    }
                }).catch((error) => {
                    reject(error);
                })
            commit("LOADING_SET", false);
        });
    },

    update({ commit }, item) {
        return new Promise(async(resolve, reject) => {
            commit("LOADING_SET", true);
            await ResearchService.update(item.id, item.research)
                .then((response) => {
                    if (response.data.success) {
                        resolve(response.data);
                    }
                }).catch((error) => {
                    reject(error);
                })
            commit("LOADING_SET", false);
        });
    },

    fetchAll({ commit }) {
        return new Promise(async(resolve, reject) => {
            commit("LOADING_SET", true);
            await ResearchService.fetchAll()
                .then((response) => {
                    if (response.data.success) {
                        commit("RESEARCH_ALL_SET", response.data.payload);
                        resolve(response.data);
                    }
                }).catch((error) => {
                    reject(error);
                })
            commit("LOADING_SET", false);
        });
    },

    fetchById({ commit }, id) {
        return new Promise(async(resolve, reject) => {
            commit("LOADING_SET", true);
            await ResearchService.fetchById(id)
                .then((response) => {
                    if (response.data.success) {
                        commit("RESEARCH_SET", response.data.payload);
                        resolve(response.data);
                    }
                }).catch((error) => {
                    reject(error);
                })
            commit("LOADING_SET", false);
        });
    },

    delete({ commit }, id) {
        return new Promise(async(resolve, reject) => {
            commit("LOADING_SET", true);
            await ResearchService.delete(id)
                .then((response) => {
                    if (response.data.success) {
                        resolve(response.data);
                    }
                }).catch((error) => {
                    reject(error);
                })
            commit("LOADING_SET", false);
        });
    },
};

const mutations = {
    RESEARCH_ALL_SET(state, response) {
        state.researchAll = response;
    },
    RESEARCH_SET(state, response) {
        state.research = response;
    },
    LOADING_SET(state, response) {
        state.loading = response;
    },
};

export default {
    namespaced: "research",
    state,
    getters,
    actions,
    mutations,
};