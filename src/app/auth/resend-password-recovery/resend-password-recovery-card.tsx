'use client'

import { Link } from '@components'
import { cn } from '@utils'
import { Button, Card, Typography } from 'penguin-ui'
import { ResendPasswordRecoveryForm } from './resend-password-recovery-form'

export const ResendPasswordRecoveryCard = () => {
	return (
		<Card
			className={cn(
				'flex max-w-96 flex-col items-center justify-center bg-background p-6',
			)}
		>
			<Typography asElement={'h2'} variant={'h1'}>
				Resend Link
			</Typography>
			<ResendPasswordRecoveryForm />
			<Button asChild fullWidth variant={'ghost'}>
				<Link href={'/auth/sign-in'}>Back to Sign In</Link>
			</Button>
		</Card>
	)
}