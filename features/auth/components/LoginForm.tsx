'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { LoginSchema, type TypeLoginSchema } from '@/features/auth/schemas'
import { useLogin } from '@/features/auth/hooks/useAuth'

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/shared/components/ui'

import { AuthWrapper } from './AuthWrapper'

export const LoginForm = () => {
	const loginMutation = useLogin()

	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit = (values: TypeLoginSchema) => {
		loginMutation.mutate(values)
	}

	return (
		<AuthWrapper
			heading='Войти'
			description='Чтобы войти на сайт введите вашу почту и пароль'
			backButtonLabel='Ещё нет аккаунта?'
			backButtonUrl='/auth/signup'
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Почта</FormLabel>
								<FormControl>
									<Input
										placeholder='ivan@example.com'
										type='email'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Пароль</FormLabel>
								<FormControl>
									<Input placeholder='**********' type='password' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type='submit'
						className='w-full cursor-pointer'
						disabled={loginMutation.isPending}
					>
						{loginMutation.isPending ? 'Вход...' : 'Войти'}
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
