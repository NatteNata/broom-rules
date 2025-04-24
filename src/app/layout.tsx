import '@app/globals.css'
import 'penguin-ui/styles.css'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { Providers } from '@api/providers'
import { AppHeader, Container } from '@components'

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
				<Providers>
					<AppHeader />
					<Container as='main'>{children}</Container>
				</Providers>
			</body>
		</html>
	)
}