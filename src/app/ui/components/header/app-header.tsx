'use client'

import { Container, Link } from '@app/ui/components'
import { Button, Header, LogoComponent } from 'penguin-ui'

export const AppHeader = () => {
	return (
		<Header>
			<Container className='min-h-0' as='div'>
				<div className='flex items-center justify-between'>
					<div>
						<Link href={'/'}>
							<LogoComponent />
						</Link>
					</div>
					<div className='flex items-center justify-between gap-6'>
						<Button variant='ghost' className='font-semibold' asChild>
							<Link href={'/auth/sign-in'}>Sign in</Link>
						</Button>
						<Button variant={'primary'} className='font-semibold' asChild>
							<Link href={'/auth/sign-up'}>Sign up</Link>
						</Button>
					</div>
				</div>
			</Container>
		</Header>
	)
}
