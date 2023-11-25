'use client'

import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export function ClerkSignInForm() {
    const { theme } = useTheme()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SignIn
                appearance={{
                    baseTheme: theme === 'dark' ? dark : undefined,
                }}
            />
        </main>
    )
}
