'use client'

import { Button, Card, Typography } from 'penguin-ui'
import { useState } from 'react'

import { Link } from '@components'
import { cn } from '@utils'

import { SignUpForm } from './sign-up-form'
import { SignUpModal } from './sign-up-modal'

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
				<SignUpForm onFormSubmit={onFormSubmit} />
				<Typography asElement={'span'} variant={'regular_text_16'}>
					Do you have an account?
				</Typography>
				<Button asChild className={'mt-1.5'} variant={'ghost'}>
					<Link href={'/sign-in'}>Sign in</Link>
				</Button>
			</Card>
			<SignUpModal
				showModal={showModal}
				email={email}
				setShowModal={setShowModal}
			/>
		</>
	)
}