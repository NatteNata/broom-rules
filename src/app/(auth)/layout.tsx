import { Wrapper } from '@/components'
import type { ReactNode } from 'react'

export default function AuthLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<Wrapper as='section' className='justify-center'>
			{children}
		</Wrapper>
	)
}
