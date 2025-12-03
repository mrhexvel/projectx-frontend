'use client'

import { use } from 'react'

interface ProfilePageProps {
	params: Promise<{ handle: string }>
}

export default function ProfileByHandlePage({ params }: ProfilePageProps) {
	const { handle } = use(params)

	return <div>{handle}</div>
}
