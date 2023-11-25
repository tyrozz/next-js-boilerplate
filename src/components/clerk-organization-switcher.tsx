'use client'

import { OrganizationSwitcher } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export function ClerkOrganizationSwitcher() {
    const { theme } = useTheme()

    return (
        <>
            <div className="hidden sm:block">
                <OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" />
            </div>
            <div className="block sm:hidden dark:text-white">
                <OrganizationSwitcher
                    afterCreateOrganizationUrl="/dashboard"
                    appearance={{
                        baseTheme: theme === 'dark' ? dark : undefined,
                        elements: {
                            organizationSwitcherTriggerIcon: `hidden`,
                            organizationPreviewTextContainer: `hidden`,
                            organizationSwitcherTrigger: `pr-0`,
                        },
                    }}
                />
            </div>
        </>
    )
}
