import HttpRequest from "../HttpRequest/httpRequest";

const httpRequest = new HttpRequest();

const API_PATH = "/api";

const UserService = {
    updateExpertise: () => {
        return httpRequest.get(`${API_PATH}/update-expertise`);
    },

    fetchExpertiseExpMainFieldAll: () => {
        return httpRequest.get(`${API_PATH}/user-expertise-exp-main-field`);
    },

    searchUserExpertise: (q) => {
        return httpRequest.get(`${API_PATH}/search-user-expertise`, {
            params: {
                q: q,
            },
        });
    },
    fetchUserExpertiseById: (id) => {
        return httpRequest.get(`${API_PATH}/user-expertise/${id}`);
    },
};

export default UserService;
