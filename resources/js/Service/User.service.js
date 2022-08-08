import HttpRequest from "../HttpRequest/httpRequest";

const httpRequest = new HttpRequest();

const API_PATH = "/api";

const UserService = {
    InsertExpertise: (user_expertise) => {
        return httpRequest.post(`${API_PATH}/user-expertise`, user_expertise);
    },
    fetchAllExpertise: () => {
        return httpRequest.get(`${API_PATH}/user-expertise`);
    },
    deleteUserExpertise: (id) => {
        return httpRequest.delete(`${API_PATH}/user-expertise/${id}`);
    },
};

export default UserService;
