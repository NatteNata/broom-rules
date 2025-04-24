'use client'

import { A } from '@/components'
import Link from 'next/link'

import { Button, Input } from 'penguin-ui'

export const ForgotPasswordForm = () => {
	return (
		<form action={''}>
			<Input
				label={'Email'}
				name={'email'}
				placeholder={'Epam@epam.com'}
				required
				type={'email'}
			/>
			<div className={'flex justify-end'}>
				<A className={'mt-2'} href={'/forgot-password'}>
					Enter your email address and we will send you further instructions
				</A>
			</div>
			<Button asChild className={'mt-6 mb-5'} fullWidth variant={'primary'}>
				<Link href={'/create-new-password'}>Create new password</Link>
			</Button>
		</form>
	)
}
