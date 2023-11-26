import { DocsConfig } from '@/types/nav'

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: 'Documentation',
            href: '/docs',
        },
        {
            title: 'Blog',
            href: '/blog',
        },
    ],
    sidebarNav: [
        {
            title: 'Getting Started',
            items: [
                {
                    title: 'Introduction',
                    href: '/docs',
                },
                {
                    title: 'Features',
                    href: '/docs/features',
                },
            ],
        },
    ],
}
