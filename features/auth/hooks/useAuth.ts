import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import {
	type LoginDto,
	type SignupDto,
	authApi
} from '@/features/auth/api/auth.api'

export const useLogin = () => {
	const router = useRouter()

	return useMutation({
		mutationFn: (data: LoginDto) => authApi.login(data),
		onSuccess: () => {
			toast.success('Успешный вход')
			router.push('/')
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError: (error: any) => {
			if (error.response?.status === 401) {
				toast.error('Неверные учетные данные')
			} else {
				toast.error('Произошла ошибка при входе')
			}
		}
	})
}

export const useSignup = () => {
	const router = useRouter()

	return useMutation({
		mutationFn: (data: SignupDto) => authApi.signup(data),
		onSuccess: () => {
			toast.success('Пользователь успешно зарегистрирован')
			router.push('/auth/login')
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError: (error: any) => {
			if (error.response?.status === 409) {
				toast.error('Пользователь с таким email уже существует')
			} else {
				toast.error('Произошла ошибка при регистрации')
			}
		}
	})
}

export const useLogout = () => {
	const router = useRouter()

	return useMutation({
		mutationFn: () => authApi.logout(),
		onSuccess: () => {
			toast.success('Вы вышли из системы')
			router.push('/auth/login')
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError: (error: any) => {
			toast.error('Произошла ошибка при выходе')
			console.error('Logout error:', error)
		}
	})
}
