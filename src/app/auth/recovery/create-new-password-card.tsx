'use client'

import { Card, Typography } from '@tornata/penguin-ui'

import { cn } from '@utils'

import { CreateNewPasswordForm } from './create-new-password-form'

type Props = {
	code: string
}

export const CreateNewPasswordCard = ({ code }: Props) => {
	return (
		<Card
			className={cn(
				'flex max-w-96 flex-col items-center justify-center bg-background p-6',
			)}
		>
			<Typography asElement={'h2'} variant={'h1'}>
				Create New Password
			</Typography>
			<CreateNewPasswordForm code={code} />
		</Card>
	)
}