/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server'

import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'
import { clerkClient } from '@clerk/nextjs'

export default authMiddleware({
    publicRoutes: [
        '/',
        '/about',
        '/pricing',
        '/sign-in(.*)',
        '/sign-up(.*)',
        '/api(.*)',
        '/blog(.*)',
        '/docs(.*)',
        '/roadmap',
        '/changelog',
        '/api/og(.*)',
    ],
    async afterAuth(auth, req, evt) {
        // handle users who aren't authenticated
        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url })
        }

        if (auth.isPublicRoute) {
            //  For public routes, we don't need to do anything
            return NextResponse.next()
        }

        const user = await clerkClient.users.getUser(auth.userId as string)
        if (!user) {
            throw new Error('User not found.')
        }
    },
})
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
