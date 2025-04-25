'use client'

import { A } from '@/components'
import { SignUpBro } from '@/components/images/sign-up-bro'
import { Button, Typography } from 'penguin-ui'

export const EmailConfirmationCard = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<Typography
				variant='h1'
				asElement='span'
				className='mt-1.5 mb-5 text-white'
			>
				Congratulations!
			</Typography>
			<Typography
				variant='regular_text_16'
				asElement='p'
				className='mb-14 font-inter font-light text-white'
			>
				Your email has been confirmed.
			</Typography>
			<Button variant='primary' asChild className='mb-2 px-12'>
				<A href={'/sign-in'}>Sign In</A>
			</Button>
			<div className='mt-16'>
				<SignUpBro />
			</div>
		</div>
	)
}
