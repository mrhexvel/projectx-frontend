import apiClient from '@/shared/utils/client/axios'

export interface LoginDto {
	email: string
	password: string
}

export interface SignupDto {
	name: string
	email: string
	password: string
}

export const authApi = {
	signup: async (data: SignupDto): Promise<void> => {
		await apiClient.post('/api/auth/signup', data)
	},

	login: async (data: LoginDto): Promise<void> => {
		await apiClient.post('/api/auth/login', data)
	},

	refresh: async (): Promise<void> => {
		await apiClient.post('/api/auth/refresh')
	},

	logout: async (): Promise<void> => {
		await apiClient.post('/api/auth/logout')
	}
}
