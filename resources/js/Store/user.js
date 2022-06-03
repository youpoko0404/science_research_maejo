const state = {
    user: null,
};

const getters = {};
const actions = {};
const mutations = {
    SET_USER: (state, newValue) => {
        state.user = newValue;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
