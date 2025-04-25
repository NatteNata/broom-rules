'use client'

import { SignUpForm } from '@/app/(auth)/sign-up/sign-up-form'
import { cn } from '@/use-cases/utils'
import Link from 'next/link'
import { useState } from 'react'

import { SignUpModal } from '@app/(auth)/sign-up/sign-up-modal'
import { Button, Card, Typography } from 'penguin-ui'

export const SignUpCard = () => {
	const [showModal, setShowModal] = useState(false)
	const [email, setEmail] = useState('')

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
				<SignUpForm setShowModal={setShowModal} setEmail={setEmail} />
				<Typography asElement={'span'} variant={'regular_text_16'}>
					Do you have an account?
				</Typography>
				<Button asChild className={'mt-1.5'} variant={'ghost'}>
					<Link href={'/sign-in'}>Sign in</Link>
				</Button>
			</Card>
			<SignUpModal showModal={showModal} email={email} />
		</>
	)
}