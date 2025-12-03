import { z } from 'zod'

export const LoginSchema = z.object({
	email: z.email({
		message: 'Введите почту'
	}),
	password: z.string().min(8, {
		message: 'Пароль более 8 символов'
	})
})

export type TypeLoginSchema = z.infer<typeof LoginSchema>
