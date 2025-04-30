import '@app/globals.css'
import 'penguin-ui/styles.css'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { AppHeader, Container } from '@components'
import { TanstackProvider } from '@infrastructure/providers'

export const metadata: Metadata = {
	description: 'For link better world',
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
				<TanstackProvider>
					<AppHeader />
					<Container as='main'>{children}</Container>
				</TanstackProvider>
			</body>
		</html>
	)
}