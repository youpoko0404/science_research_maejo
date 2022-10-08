import HttpRequest from "../HttpRequest/httpRequest";

const httpRequest = new HttpRequest();

const API_PATH = "/api";

const PermissionService = {
    fetchUserPermission: () => {
        return httpRequest.get(`${API_PATH}/user-permission`);
    },
    updateUserPermission: (item) => {
        return httpRequest.post(`${API_PATH}/user-permission`, item);
    },
    fetchUserPermissionByUserId: () => {
        return httpRequest.get(`${API_PATH}/my-permission`);
    },
};

export default PermissionService;
