'use client'

import { Link } from '@components'
import { Button, Card, IconGoogle, Typography } from '@tornata/penguin-ui'
import { cn } from '@utils'

import { SignInForm } from './sign-in-form'

export const SignInCard = () => {
	const googleAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?
	redirect_uri=${process.env.NEXT_PUBLIC_LOCALHOST}&
	client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&
	scope=openid%20email%20profile&
	response_type=code`

	return (
		<Card
			className={cn(
				'flex max-w-96 flex-col items-center justify-center bg-background p-6',
			)}
		>
			<Typography asElement={'h2'} variant={'h1'}>
				Sign in
			</Typography>
			<div className={'flex items-center justify-center pt-6'}>
				<Link href={googleAuthURL}>
					<IconGoogle width={36} height={36} />
				</Link>
			</div>
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
