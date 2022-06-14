import HttpRequest from '../HttpRequest/httpRequest'

const httpRequest = new HttpRequest()

const API_PATH = "/api"

const ParameterService = {
    fetchParameter: (group_name) => {
        return httpRequest.get(`${API_PATH}/parameter`, {
            params: {
                group_name: group_name
            },
        })
    }
}

export default ParameterService