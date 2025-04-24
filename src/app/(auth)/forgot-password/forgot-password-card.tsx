'use client'

import { ForgotPasswordForm } from '@/app/(auth)/forgot-password/forgot-password-form'
import { cn } from '@/use-cases/utils'
import Link from 'next/link'

import { Button, Card, Typography } from 'penguin-ui'

export const ForgotPasswordCard = () => {
	return (
		<Card
			className={cn(
				'flex max-w-96 flex-col items-center justify-center bg-background p-6',
			)}
		>
			<Typography asElement={'h2'} variant={'h1'}>
				Forgot Password
			</Typography>
			<ForgotPasswordForm />
			<Button asChild fullWidth variant={'ghost'}>
				<Link href={'/sign-in'}>Back to Sign in</Link>
			</Button>
		</Card>
	)
}
