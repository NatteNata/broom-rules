'use client'

import { Button, Card, Typography } from '@tornata/penguin-ui'
import { useState } from 'react'

import { Link } from '@components'
import { cn } from '@utils'

import { SentEmailModal } from '@app/ui/components/modals/sent-email-modal'
import { SignUpForm } from './sign-up-form'

export const SignUpCard = () => {
	const [showModal, setShowModal] = useState(false)
	const [email, setEmail] = useState('')

	const onFormSubmit = (email: string) => {
		setShowModal(true)
		setEmail(email)
	}

	return (
		<>
			<Card
				className={cn(
					'flex max-w-96 flex-col items-center justify-center bg-background p-6',
				)}
			>
				<Typography asElement={'h2'} variant={'h1'}>
					Sign up
				</Typography>
				<SignUpForm onFormSubmitAction={onFormSubmit} />
				<Typography asElement={'span'} variant={'regular_text_16'}>
					Do you have an account?
				</Typography>
				<Button asChild className={'mt-1.5'} variant={'ghost'}>
					<Link href={'/auth/sign-in'}>Sign in</Link>
				</Button>
			</Card>
			<SentEmailModal
				showModal={showModal}
				email={email}
				setShowModalAction={setShowModal}
			/>
		</>
	)
}