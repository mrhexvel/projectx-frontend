export default function PublicLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div className='relative min-h-screen w-full'>{children}</div>
}
