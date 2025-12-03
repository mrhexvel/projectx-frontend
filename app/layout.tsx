import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { ToggleTheme } from '@/shared/components/ui'
import { MainProvider } from '@/shared/providers'
import '@/shared/styles/globals.css'

const montserratFont = Montserrat({
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		absolute: 'Платформа для поиска и установления деловых контактов',
		template: '%s | Portfolio X'
	},
	description: 'Платформа для поиска и установления деловых контактов'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${montserratFont.className} antialiased`}>
				<MainProvider>
					<div className='relative flex min-h-screen flex-col'>
						<ToggleTheme />
						<div className='flex h-screen w-full items-center justify-center px-4'>
							{children}
						</div>
					</div>
				</MainProvider>
			</body>
		</html>
	)
}
