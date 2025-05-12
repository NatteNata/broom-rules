import '@app/globals.css'
import '@tornata/penguin-ui/styles.css'

import { AppHeader } from '@components'
import { TanstackProvider } from '@infrastructure/providers'
import { AuthProvider } from '@infrastructure/providers/auth-provider'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
	description: 'For link better world',
	title: 'Tornata | Be the change',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang={'en'}>
			<body>
				<TanstackProvider>
					<AuthProvider>
						<AppHeader />
						<main>{children}</main>
					</AuthProvider>
				</TanstackProvider>
			</body>
		</html>
	)
}