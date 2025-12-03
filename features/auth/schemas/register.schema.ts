import { z } from 'zod'

export const RegisterSchema = z
	.object({
		name: z.string().min(1, {
			message: 'Введите имя'
		}),
		email: z.email({
			message: 'Введите почту'
		}),
		password: z.string().min(8, {
			message: 'Пароль более 8 символов'
		}),
		passwordRepeat: z.string().min(8, {
			message: 'Пароль подтверждения более 8 символов'
		})
	})
	.refine(data => data.password === data.passwordRepeat, {
		message: 'Пароли не совпадают',
		path: ['passwordRepeat']
	})

export type TypeRegisterSchema = z.infer<typeof RegisterSchema>
