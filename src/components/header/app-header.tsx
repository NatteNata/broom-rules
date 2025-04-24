'use client'

import { A, Container } from '@/components'
import { Header, LogoComponent } from 'penguin-ui'

export const AppHeader = () => {
	return (
		<Container as='header' className='min-h-16'>
			<Header>
				<A href={'/'}>
					<LogoComponent />
				</A>
			</Header>
		</Container>
	)
}