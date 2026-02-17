import { auth } from "@/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
    const session = await auth()

    // Protect /admin routes
    if (request.nextUrl.pathname.startsWith('/admin')) {
        if (!session) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    // Redirect to admin if already logged in and trying to access login
    if (request.nextUrl.pathname === '/login') {
        if (session) {
            return NextResponse.redirect(new URL('/admin', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*', '/login']
}
