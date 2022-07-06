import DashboardService from "../Service/Dashboard.service";

const state = {
    dashboard: null,
    search_research: null,
    search_research_by_id: null,
    loading: false,
};

const getters = {}

const actions = {
    fetchDashboard({ commit }) {
        return new Promise(async(resolve, reject) => {
            commit("LOADING_SET", true);
            await DashboardService.fetchDashboard()
                .then((response) => {
                    if (response.data.success) {
                        commit("DASHBOARD_SET", response.data.payload);
                        resolve(response.data);
                    }
                }).catch((error) => {
                    reject(error);
                })
            commit("LOADING_SET", false);
        });
    },

    fetchSearchResearch({ commit }, q) {
        return new Promise(async(resolve, reject) => {
            commit("LOADING_SET", true);
            await DashboardService.fetchSearchResearch(q)
                .then((response) => {
                    if (response.data.success) {
                        commit("SEARCH_RESEARCH_SET", response.data.payload);
                        resolve(response.data);
                    }
                }).catch((error) => {
                    reject(error);
                })
            commit("LOADING_SET", false);
        });
    },

    fetchSearchResearchById({ commit }, id) {
        return new Promise(async(resolve, reject) => {
            commit("LOADING_SET", true);
            await DashboardService.fetchSearchResearchById(id)
                .then((response) => {
                    if (response.data.success) {
                        commit("SEARCH_RESEARCH_BY_ID_SET", response.data.payload);
                        resolve(response.data);
                    }
                }).catch((error) => {
                    reject(error);
                })
            commit("LOADING_SET", false);
        });
    },

    downloadFile({ commit }, item) {
        return new Promise(async(resolve, reject) => {
            await DashboardService.downloadFile(item)
                .then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
        });
    },
};

const mutations = {
    DASHBOARD_SET(state, response) {
        state.dashboard = response;
    },
    SEARCH_RESEARCH_SET(state, response) {
        state.search_research = response;
    },
    SEARCH_RESEARCH_BY_ID_SET(state, response) {
        state.search_research_by_id = response;
    },
    LOADING_SET(state, response) {
        state.loading = response;
    },
};

export default {
    namespaced: "dashboard",
    state,
    getters,
    actions,
    mutations,
};