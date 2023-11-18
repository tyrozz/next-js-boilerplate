import { SiteHeader } from '@/components/site-header'

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SiteHeader />
            {children}
        </>
    )
}
