import Permission from "../Service/Permission.service";

const state = {
    user_permission: null,
    my_permission: null,
    loading: false,
};

const getters = {};

const actions = {
    fetchUserPermissionByUserId({ commit }) {
        return new Promise(async (resolve, reject) => {
            state.loading = true;
            await Permission.fetchUserPermissionByUserId()
                .then((response) => {
                    if (response.data.success) {
                        commit("USER_MY_PERMISSIONS", response.data.payload);
                        resolve(response.data);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
            state.loading = false;
        });
    },

    fetchUserPermission({ commit }) {
        return new Promise(async (resolve, reject) => {
            state.loading = true;
            await Permission.fetchUserPermission()
                .then((response) => {
                    if (response.data.success) {
                        commit("USER_PERMISSIONS", response.data.payload);
                        resolve(response.data);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
            state.loading = false;
        });
    },

    updateUserPermission({ commit }, item) {
        return new Promise(async (resolve, reject) => {
            state.loading = true;
            await Permission.updateUserPermission(item)
                .then((response) => {
                    // if (response.data.success) {
                    //     commit("USER_PERMISSIONS", response.data.payload);
                    //     resolve(response.data);
                    // }
                })
                .catch((error) => {
                    reject(error);
                });
            state.loading = false;
        });
    },
};

const mutations = {
    USER_PERMISSIONS(state, response) {
        state.user_permission = response;
    },
    USER_MY_PERMISSIONS(state, response) {
        state.my_permission = response;
    },
};

export default {
    namespaced: "permission",
    state,
    getters,
    actions,
    mutations,
};
