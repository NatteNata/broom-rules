'use client'

import { Link } from '@app/ui/components'
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
				<Link className={'mt-2'} href={'/forgot-password'}>
					Forgot password?
				</Link>
			</div>
			<Button asChild className={'mt-6 mb-5'} fullWidth variant={'primary'}>
				<Link href={'/sign-in'}>Sign in</Link>
			</Button>
		</form>
	)
}
