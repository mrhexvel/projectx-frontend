import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios'

const apiClient = axios.create({
	baseURL: process.env.SERVER_URL,
	withCredentials: true
})

let isRefreshing = false
let failedQueue: Array<{
	resolve: (value?: unknown) => void
	reject: (error?: unknown) => void
}> = []

const processQueue = (
	error: AxiosError | null,
	token: string | null = null
) => {
	failedQueue.forEach(prom => {
		if (error) {
			prom.reject(error)
		} else {
			prom.resolve(token)
		}
	})

	failedQueue = []
}

apiClient.interceptors.response.use(
	response => response,
	async (error: AxiosError) => {
		const originalRequest = error.config as InternalAxiosRequestConfig & {
			_retry?: boolean
		}

		const isAuthEndpoint =
			originalRequest.url?.includes('/api/auth/refresh') ||
			originalRequest.url?.includes('/api/auth/logout') ||
			originalRequest.url?.includes('/api/auth/login') ||
			originalRequest.url?.includes('/api/auth/signup')

		if (
			error.response?.status === 401 &&
			!originalRequest._retry &&
			!isAuthEndpoint
		) {
			if (isRefreshing) {
				return new Promise((resolve, reject) => {
					failedQueue.push({ resolve, reject })
				})
					.then(() => {
						return apiClient(originalRequest)
					})
					.catch(err => {
						return Promise.reject(err)
					})
			}

			originalRequest._retry = true
			isRefreshing = true

			try {
				await apiClient.post('/api/auth/refresh')
				processQueue(null, null)
				return apiClient(originalRequest)
			} catch (refreshError) {
				processQueue(refreshError as AxiosError, null)
				if (typeof window !== 'undefined') {
					window.location.href = '/auth/login'
				}
				return Promise.reject(refreshError)
			} finally {
				isRefreshing = false
			}
		}

		return Promise.reject(error)
	}
)

export default apiClient
