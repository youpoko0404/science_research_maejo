import HttpRequest from '../HttpRequest/httpRequest'

const httpRequest = new HttpRequest()

const API_PATH = "/api"

const AuthService = {
    login: (item) => {
        return httpRequest.post(`${API_PATH}/login`, item)
    },
    logout: () => {
        return httpRequest.post(`${API_PATH}/logout`)
    },
    fetchUser: () => {
        return httpRequest.get(`${API_PATH}/user`)
    }
}

export default AuthService