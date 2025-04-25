'use client'

import { CreateNewPasswordForm } from '@/app/(auth)/create-new-password/create-new-password-form'
import { cn } from '@/use-cases/utils'

import { Card, Typography } from 'penguin-ui'

export const CreateNewPasswordCard = () => {
	return (
		<Card
			className={cn(
				'flex max-w-96 flex-col items-center justify-center bg-background p-6',
			)}
		>
			<Typography asElement={'h2'} variant={'h1'}>
				Create New Password
			</Typography>
			<CreateNewPasswordForm />
		</Card>
	)
}
