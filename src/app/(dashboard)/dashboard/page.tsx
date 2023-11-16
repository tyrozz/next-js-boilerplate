import { DashboardShell } from '@/components/shell'
import { DashboardHeader } from '@/components/dashboard-header'

export const metadata = {
    title: 'Dashboard',
    description: 'Application dashboard',
}

export default async function DashboardPage() {
    return (
        <DashboardShell>
            <DashboardHeader heading="Welcome!" text="" />
            <div className="grid gap-10"></div>
        </DashboardShell>
    )
}
