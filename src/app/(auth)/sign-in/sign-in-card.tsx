'use client'

import { SignInForm } from '@/app/(auth)/sign-in/sign-in-form'
import { A } from '@/components'
import { cn } from '@/use-cases/utils'

import { Button, Card, Typography } from 'penguin-ui'

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
			<SignInForm />
			<Typography
				asElement='span'
				className='text-light-100'
				variant='regular_text_16'
			>
				Don&#39;t have an account?
			</Typography>
			<Button asChild className='mt-1.5' variant='ghost'>
				<A href={'/sign-up'}>Sign up</A>
			</Button>
		</Card>
	)
}
