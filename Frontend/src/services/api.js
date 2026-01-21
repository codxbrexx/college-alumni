const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

class ApiService {
    constructor() {
        this.baseUrl = API_BASE_URL
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`

        const config = {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                ...options.headers
            },
            ...options
        }

        if (options.body && typeof options.body === "object" && !(options.body instanceof FormData)) {
            config.body = JSON.stringify(options.body)
        } else if (options.body instanceof FormData) {
            delete config.headers["Content-Type"]
            config.body = options.body
        }

        try {
            const response = await fetch(url, config)
            const data = await response.json()

            if (!response.ok) {
                throw {
                    status: response.status,
                    message: data.message || "Something went wrong",
                    data
                }
            }

            return data
        } catch (error) {
            if (error.status) {
                throw error
            }
            throw {
                status: 500,
                message: error.message || "Network error"
            }
        }
    }

    get(endpoint, params = {}) {
        const queryString = new URLSearchParams(params).toString()
        const url = queryString ? `${endpoint}?${queryString}` : endpoint
        return this.request(url, { method: "GET" })
    }

    post(endpoint, body) {
        return this.request(endpoint, { method: "POST", body })
    }

    put(endpoint, body) {
        return this.request(endpoint, { method: "PUT", body })
    }

    patch(endpoint, body) {
        return this.request(endpoint, { method: "PATCH", body })
    }

    delete(endpoint) {
        return this.request(endpoint, { method: "DELETE" })
    }
}

export const api = new ApiService()

export const authApi = {
    register: (data) => api.post("/auth/register", data),
    login: (data) => api.post("/auth/login", data),
    logout: () => api.post("/auth/logout"),
    forgotPassword: (email) => api.post("/auth/forgot", { email }),
    resetPassword: (data) => api.post("/auth/createpassword", data)
}

export const jobsApi = {
    getAll: (params) => api.get("/jobs", params),
    getById: (id) => api.get(`/jobs/${id}`),
    create: (data) => api.post("/jobs", data),
    update: (id, data) => api.put(`/jobs/${id}`, data),
    delete: (id) => api.delete(`/jobs/${id}`),
    getMyJobs: () => api.get("/jobs/user/me")
}

export const newsApi = {
    getAll: (params) => api.get("/news", params),
    getById: (id) => api.get(`/news/${id}`),
    create: (data) => api.post("/news", data),
    update: (id, data) => api.put(`/news/${id}`, data),
    delete: (id) => api.delete(`/news/${id}`)
}

export const alumniApi = {
    getAll: (params) => api.get("/alumni", params),
    getById: (id) => api.get(`/alumni/${id}`),
    getProfile: () => api.get("/alumni/me"),
    updateProfile: (data) => api.patch("/alumni/me", data),
    updateAvatar: (formData) => api.patch("/alumni/me/avatar", formData)
}
