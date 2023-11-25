import { ClerkSignInForm } from '@/components/auth/clerk-sign-in-form'

export default function SignInPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ClerkSignInForm />
        </main>
    )
}
