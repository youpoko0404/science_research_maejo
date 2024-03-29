import HttpRequest from "../HttpRequest/httpRequest";

const httpRequest = new HttpRequest();

const API_PATH = "/api";

const ResearchService = {
    save: (research) => {
        httpRequest.setHeader({
            key: "Content-Type",
            value: "multipart/form-data",
        });
        return httpRequest.post(`${API_PATH}/research`, research);
    },
    update: (id, research) => {
        httpRequest.setHeader({
            key: "Content-Type",
            value: "multipart/form-data",
        });
        return httpRequest.post(`${API_PATH}/research/edit/${id}`, research);
    },
    fetchAll: () => {
        return httpRequest.get(`${API_PATH}/research`);
    },
    fetchAllAdmin: () => {
        return httpRequest.get(`${API_PATH}/research/admin`);
    },
    fetchById: (id) => {
        return httpRequest.get(`${API_PATH}/research/${id}`);
    },
    delete: (id) => {
        return httpRequest.delete(`${API_PATH}/research/${id}`);
    }
};

export default ResearchService;
