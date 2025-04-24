'use client'

import { A } from '@/components'
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
				<A href={'/sign-in'}>Resend verification link</A>
			</Button>
		</form>
	)
}
