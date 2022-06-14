import HttpRequest from '../HttpRequest/httpRequest'

const httpRequest = new HttpRequest()

const API_PATH = "/api"

const DashboardService = {
    fetchDashboard: () => {
        return httpRequest.get(`${API_PATH}/dashboard`)
    }
}

export default DashboardService