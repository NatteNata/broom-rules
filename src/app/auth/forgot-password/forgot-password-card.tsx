'use client'

import { Link } from '@components'
import { Recapcha } from '@infrastructure/recapcha'
import { cn } from '@utils'
import { Button, Card, Typography } from 'penguin-ui'
import { useState } from 'react'

import { ForgotPasswordForm } from './forgot-password-form'

export const ForgotPasswordCard = () => {
	const [token, setToken] = useState('')

	return (
		<Card
			className={cn(
				'flex max-w-96 flex-col items-center justify-center bg-background p-6',
			)}
		>
			<Typography asElement={'h2'} variant={'h1'}>
				Forgot Password
			</Typography>
			<ForgotPasswordForm token={token} />
			<Button asChild fullWidth variant={'ghost'}>
				<Link href={'/auth/sign-in'}>Back to Sign In</Link>
			</Button>
			<div className={'w-full py-8 [&>div]:w-full'}>
				<Recapcha returnToken={setToken} />
			</div>
		</Card>
	)
}
