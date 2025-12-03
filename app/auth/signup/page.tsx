import type { Metadata } from 'next'

import { RegisterForm } from '@/features/auth/components/RegisterForm'

export const metadata: Metadata = {
	title: 'Регистрация'
}

export default function SignUpPage() {
	return <RegisterForm />
}
