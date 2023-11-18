import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: '404',
    description: 'Something went wrong',
}

export default function NotFound() {
    return (
        <div className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Page not found</h1>
                <Link href="/" className="mt-4 underline text-base-regular text-gray-900">
                    Go to home page
                </Link>
            </div>
        </div>
    )
}
