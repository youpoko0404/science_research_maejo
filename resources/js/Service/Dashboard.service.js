import HttpRequest from '../HttpRequest/httpRequest'

const httpRequest = new HttpRequest()

const API_PATH = "/api"

const DashboardService = {
    fetchDashboard: () => {
        return httpRequest.get(`${API_PATH}/dashboard`)
    },
    fetchSearchResearch: (q) => {
        return httpRequest.get(`${API_PATH}/search-research`, {
            params: {
                q: q
            },
        })
    },
    fetchSearchResearchById: (id) => {
        return httpRequest.get(`${API_PATH}/search-research/${id}`)
    },
    downloadFile: (item) => {
        return httpRequest.get(`${API_PATH}/download-file`, {
            params: {
                id: item.id,
                filename: item.filename
            },
            responseType: 'blob'
        })
    },
}

export default DashboardService