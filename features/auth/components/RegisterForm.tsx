import { AuthWrapper } from './AuthWrapper'

export const RegisterForm = () => {
	return (
		<AuthWrapper
			heading='Регистрация'
			description='Чтобы войти на сайт введите вашу почту и пароль'
			backButtonLabel='У вас уже есть аккаунт?'
			backButtonUrl='/auth/login'
		>
			RegisterForm
		</AuthWrapper>
	)
}
