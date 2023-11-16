import { SiteHeader } from '@/components/site-header'

export default function About() {
    return (
        <>
            <SiteHeader />
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">About</h1>
                </div>
            </section>
        </>
    )
}
