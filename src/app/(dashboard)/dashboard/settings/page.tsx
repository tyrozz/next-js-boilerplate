import { Metadata } from 'next'

import { DashboardHeader } from '@/components/dashboard-header'
import { DashboardShell } from '@/components/shell'

export const metadata: Metadata = {
    title: 'Settings',
    description: 'Manage account and website settings.',
}

export default async function SettingsPage() {
    return (
        <DashboardShell>
            <DashboardHeader heading="Settings" text="Manage account and website settings." />
            <div className="grid gap-10"></div>
        </DashboardShell>
    )
}
