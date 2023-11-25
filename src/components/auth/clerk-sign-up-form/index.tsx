'use client'

import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export function ClerkSignUpForm() {
    const { theme } = useTheme()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SignUp
                appearance={{
                    baseTheme: theme === 'dark' ? dark : undefined,
                }}
            />
        </main>
    )
}
