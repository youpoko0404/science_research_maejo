import DashboardService from "../Service/Dashboard.service";

const state = {
    dashboard: null,
    loading: false,
    to: "123"
};

const getters = {}

const actions = {
    fetchDashboard({ commit }) {
        return new Promise(async(resolve, reject) => {
            state.loading = true;
            await DashboardService.fetchDashboard()
                .then((response) => {
                    if (response.data.success) {
                        commit("DASHBOARD_SET", response.data.payload);
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
    DASHBOARD_SET(state, response) {
        state.dashboard = response;
    },
};

export default {
    namespaced: "dashboard",
    state,
    getters,
    actions,
    mutations,
};