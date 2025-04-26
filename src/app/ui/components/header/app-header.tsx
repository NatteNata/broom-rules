'use client'

import { Container, Link } from '@app/ui/components'
import { Header, LogoComponent } from 'penguin-ui'

export const AppHeader = () => {
	return (
		<Header>
			<Container className='min-h-0' as='div'>
				<Link href={'/'}>
					<LogoComponent />
				</Link>
			</Container>
		</Header>
	)
}
