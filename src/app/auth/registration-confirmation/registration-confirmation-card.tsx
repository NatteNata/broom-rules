'use client'

import { Link, SignUpBro } from '@components'
import { useRegistrationConfirmationMutation } from '@infrastructure/api'
import { useRouter } from 'next/navigation'

import { Button, Typography } from 'penguin-ui'
import { useEffect } from 'react'

type Props = {
	code: string
}

export const RegistrationConfirmationCard = ({ code }: Props) => {
	const router = useRouter()

	const { mutate, error, isPending, isSuccess } =
		useRegistrationConfirmationMutation()

	useEffect(() => {
		mutate({ confirmationCode: code })
	}, [mutate, code])

	if (isPending) {
		return <h1>Loading...</h1>
	}

	if (error) {
		router.push('/auth/expired-link')
	}

	if (isSuccess) {
		return (
			<div className='flex flex-col items-center justify-center'>
				<Typography
					variant='h1'
					asElement='span'
					className='mt-1.5 mb-5 text-white'
				>
					Congratulations!
				</Typography>
				<Typography
					variant='regular_text_16'
					asElement='p'
					className='mb-14 font-inter font-light text-white'
				>
					Your email has been confirmed.
				</Typography>
				<Button variant='primary' asChild className='mb-2 px-12'>
					<Link href={'/auth/sign-in'}>Sign In</Link>
				</Button>
				<div className='mt-16'>
					<SignUpBro />
				</div>
			</div>
		)
	}
}
