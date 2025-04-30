'use client'

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

			<Button variant='primary' className='mb-2 px-12' type='submit'>
				Resend verification link
			</Button>
		</form>
	)
}