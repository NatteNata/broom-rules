import { Container, Sidebar } from '@components'
import type React from 'react'

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Container className='flex p-0'>
			<Sidebar />
			<Container as='section'>{children}</Container>
		</Container>
	)
}
