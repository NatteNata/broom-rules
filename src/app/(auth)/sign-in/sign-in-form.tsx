'use client'

import { A } from '@/components'
import { Button, Input } from 'penguin-ui'

export const SignInForm = () => {
	return (
		<form action={''}>
			<Input
				label={'Email'}
				name={'email'}
				placeholder={'Epam@epam.com'}
				required
				type={'email'}
			/>
			<Input
				label={'Password'}
				name={'password'}
				placeholder={'Somecool345&^password'}
				required
				type={'password'}
			/>
			<div className={'flex justify-end'}>
				<A className={'mt-2'} href={'/forgot-password'}>
					Forgot password?
				</A>
			</div>
			<Button asChild className={'mt-6 mb-5'} fullWidth variant={'primary'}>
				<A href={'/sign-in'}>Sign in</A>
			</Button>
		</form>
	)
}
