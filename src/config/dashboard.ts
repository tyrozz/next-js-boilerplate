import { DashboardConfig } from '@/types/nav'

export const dashboardConfig: DashboardConfig = {
    mainNav: [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
    ],
    sidebarNav: [
        {
            title: 'Settings',
            href: '/dashboard/settings',
            icon: 'settings',
        },
    ],
}
