'use client'

import { Link } from '@components'
import type { LoginUser } from '@entities/user'
import { Button, Input, Typography } from '@tornata/penguin-ui'
import { redirect } from 'next/navigation'
import { useLoginUser } from 'src/use-cases/auth/use-login-user'

export const SignInForm = () => {
	const { loginUser, isPending, form, error, isSuccess } = useLoginUser()

	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = form

	const onSubmit = (data: LoginUser) => {
		loginUser(data)
	}

	if (isSuccess) {
		redirect('/')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate className='group'>
			<fieldset
				className='group-disabled:pointer-events-none group-disabled:opacity-80'
				disabled={isPending}
			>
				<Input
					label={'Email'}
					{...register('email')}
					placeholder={'Epam@epam.com'}
					required
					type={'email'}
					hasError={!!errors?.email}
					helperMessage={errors?.email?.message}
				/>
				<Input
					label={'Password'}
					{...register('password')}
					placeholder={'Somecool345&^password'}
					required
					type={'password'}
					hasError={!!errors?.password}
					helperMessage={errors?.password?.message}
				/>
				<div className={'flex justify-end'}>
					<Link
						className={'mt-2 font-inter font-light text-light-900'}
						href={'/auth/forgot-password'}
					>
						Forgot password?
					</Link>
				</div>
				<Button
					className={'mt-6 mb-5'}
					fullWidth
					variant={'primary'}
					type={'submit'}
					disabled={isPending || !isValid}
				>
					{isPending ? 'Submitting...' : 'Sign in'}
				</Button>
			</fieldset>
			{error && (
				<Typography
					as={'p'}
					variant={'h3'}
					className={'py-4 text-center text-danger-500'}
				>
					{error.message}
				</Typography>
			)}
		</form>
	)
}