import axios from 'axios'
class HttpRequest {
    axiosInstance
    constructor(url) {
        this.axiosInstance = axios.create({
            baseURL: url,
            timeout: 600000,
        })
        this.axiosInstance.defaults.headers['Content-Type'] = 'application/json'
        
        this.axiosInstance.interceptors.request.use(
            (config) => {
                return config
            },
            (error) => {
                return Promise.reject(error)
            },
        )

        this.axiosInstance.interceptors.response.use(
            (response) => {
                return response
            },
            (error) => {
                if (error.response === undefined) {
                    setTimeout(() => {
                        window.location.href ='/error500'
                    })
                } else if (error.response.status === 401) {
                    setTimeout(() => {
                        // window.location.href ='/login'
                    })
                } else if (error.response.status === 404) {
                    setTimeout(() => {
                        window.location.href ='/error404'
                    })
                } else if (error.response.status === 500) {
                    setTimeout(() => {
                        window.location.href ='/error500'
                    })
                }
                return new Promise((resolve, reject) => {
                    reject(error)
                })
            },
        )
    }

    setHeader(header) {
        this.axiosInstance.defaults.headers.common[header.key] = header.value
    }

    get(methodName, config) {
        return this.axiosInstance.get(methodName, config)
    }

    post(methodName, data, config) {
        return this.axiosInstance.post(methodName, data, config)
    }

    put(methodName, data, config) {
        return this.axiosInstance.put(methodName, data, config)
    }

    delete(methodName, config) {
        return this.axiosInstance.delete(methodName, config)
    }
}

export default HttpRequest