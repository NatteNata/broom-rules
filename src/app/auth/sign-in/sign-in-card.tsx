'use client'

import { OAuth } from '@app/auth/(oauth)/oauth'
import { Link } from '@components'
import { Button, Card, Typography } from '@tornata/penguin-ui'
import { cn } from '@utils'

import { SignInForm } from './sign-in-form'

export const SignInCard = () => {
	return (
		<Card
			className={cn(
				'flex max-w-96 flex-col items-center justify-center bg-background p-6',
			)}
		>
			<Typography asElement={'h2'} variant={'h1'}>
				Sign in
			</Typography>
			<OAuth />
			<SignInForm />
			<Typography
				asElement='span'
				className='text-light-100'
				variant='regular_text_16'
			>
				Don&#39;t have an account?
			</Typography>
			<Button asChild className='mt-1.5' variant='ghost'>
				<Link href={'/auth/sign-up'}>Sign up</Link>
			</Button>
		</Card>
	)
}
