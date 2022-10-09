import HttpRequest from "../HttpRequest/httpRequest";

const httpRequest = new HttpRequest();

const API_PATH = "/api";

const UserService = {
    updateExpertise: () => {
        return httpRequest.get(`${API_PATH}/update-expertise`);
    },
    searchUserExpertise: (q) => {
        return httpRequest.get(`${API_PATH}/search-user-expertise`, {
            params: {
                q: q,
            },
        });
    },
};

export default UserService;
