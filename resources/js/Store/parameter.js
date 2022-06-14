import ParameterService from "../Service/Parameter.service";

const state = {
    loading: false,
};

const getters = {};

const actions = {
    fetchParameter({ commit }, group_name) {
        return new Promise(async(resolve, reject) => {
            state.loading = true;
            await ParameterService.fetchParameter(group_name)
                .then((response) => {
                    if (response.data.success) {
                        commit("PARAMETER_SET", response.data.payload);
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
    PARAMETER_SET(state, response) {
        const key = Object.keys(response)
        for (var i = 0; i < key.length; i++) {
            const keyElement = key[i]
            const element = response[key[i]]
            if (element.length != 0) {
                if (!state[keyElement]) {
                    state[keyElement] = null;
                }
                state[keyElement] = element;
            }
        }
    },
};

export default {
    namespaced: "parameter",
    state,
    getters,
    actions,
    mutations,
};