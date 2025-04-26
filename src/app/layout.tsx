import '@app/globals.css'
import 'penguin-ui/styles.css'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { AppHeader, Container } from '@app/ui/components'
import { QueryProvider } from '@infrastructure/providers/query-provider'

export const metadata: Metadata = {
	description: 'For a better world',
	title: 'Tornata | Be the change',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang={'en'}>
			<body>
				<QueryProvider>
					<AppHeader />
					<Container as='main'>{children}</Container>
				</QueryProvider>
			</body>
		</html>
	)
}
