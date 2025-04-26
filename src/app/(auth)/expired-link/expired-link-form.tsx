'use client'

import { Link } from '@app/ui/components'
import { Button, Input } from 'penguin-ui'

export const ExpiredLinkForm = () => {
	return (
		<form action=''>
			<Input
				type='email'
				name='email'
				placeholder='Epam@epam.com'
				label='Email'
			/>

			<Button variant='primary' asChild className='mb-2 px-12' type='submit'>
				<Link href={'/sign-in'}>Resend verification link</Link>
			</Button>
		</form>
	)
}
