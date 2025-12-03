import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	const accessToken = request.cookies.get('access_token')?.value

	if (pathname.startsWith('/u')) {
		if (!accessToken) {
			const loginUrl = new URL('/auth/login', request.url)
			loginUrl.searchParams.set('redirect', pathname)
			return NextResponse.redirect(loginUrl)
		}
	}

	if (pathname.startsWith('/auth')) {
		if (accessToken) {
			return NextResponse.redirect(new URL('/', request.url))
		}
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/auth/:path*', '/u/:path*']
}
