import type { PropsWithChildren } from 'react'

import { TanstackQueryProvider } from './TanstackQueryProvider'
import { ThemeProvider } from './ThemeProvider'

export const MainProvider = ({ children }: PropsWithChildren) => {
	return (
		<TanstackQueryProvider>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				disableTransitionOnChange
				storageKey='portfoliox-theme'
			>
				{children}
			</ThemeProvider>
		</TanstackQueryProvider>
	)
}
