'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Link } from '@components'
import { Button, Input } from 'penguin-ui'

import { useLogin } from '@infrastructure/api'
import { type SignInFormData, signInSchema } from '@infrastructure/validators'

export const SignInForm = () => {
	const form = useForm<SignInFormData>({
		resolver: zodResolver(signInSchema),
		mode: 'onBlur',
	})

	const { mutate: loginUser, isPending } = useLogin()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = form

	const onSubmit = (data: SignInFormData) => {
		loginUser(data)
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
					aria-invalid={!!errors?.email}
					helperMessage={errors?.email?.message}
				/>
				<Input
					label={'Password'}
					{...register('password')}
					placeholder={'Somecool345&^password'}
					required
					type={'password'}
					aria-invalid={!!errors?.password}
					helperMessage={errors?.password?.message}
				/>
				<div className={'flex justify-end'}>
					<Link className={'mt-2'} href={'/forgot-password'}>
						Forgot password?
					</Link>
				</div>
				<Button
					className={'mt-6 mb-5'}
					fullWidth
					variant={'primary'}
					type={'submit'}
				>
					Sign in
				</Button>
			</fieldset>
		</form>
	)
}