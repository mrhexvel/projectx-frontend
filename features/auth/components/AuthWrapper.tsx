import Link from 'next/link'
import type { PropsWithChildren } from 'react'

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/shared/components/ui'

interface AuthWrapperProps {
	heading: string
	description?: string
	backButtonLabel?: string
	backButtonUrl?: string
}

export const AuthWrapper = ({
	children,
	heading,
	description,
	backButtonLabel,
	backButtonUrl
}: PropsWithChildren<AuthWrapperProps>) => {
	return (
		<Card className='w-[400px]'>
			<CardHeader className='space-y-2'>
				<CardTitle>{heading}</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter>
				{backButtonLabel && backButtonUrl && (
					<Button variant='link' className='w-full font-normal'>
						<Link href={backButtonUrl}>{backButtonLabel}</Link>
					</Button>
				)}
			</CardFooter>
		</Card>
	)
}
