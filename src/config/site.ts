export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: 'Next.js Boilerplate',
    description: 'Jump start your Next.js app',
    mainNav: [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'About',
            href: '/about',
        },
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
        {
            title: 'Blog',
            href: '/blog',
        },
        {
            title: 'Docs',
            href: '/docs',
        },
    ],
    links: {
        twitter: 'https://twitter.com/',
        github: '/',
    },
}
