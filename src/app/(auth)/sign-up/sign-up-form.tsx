'use client'

import { type SubmitHandler, useForm } from 'react-hook-form'

import { FormCheckbox } from '@/components/form/form-checkbox'
import { cn } from '@/use-cases/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { TermsAndPolicy } from '@/app/(auth)/sign-up/terms-and-policy'
import { useRegistration } from '@api/auth/auth.hooks'
import { Button, Input, Typography } from 'penguin-ui'

const signUpSchema = z
	.object({
		email: z.string().email('Must be a valid email address'),
		legal: z.literal(true, {
			errorMap: () => ({ message: 'You must agree to Terms and Policy' }),
		}),
		password: z.string().min(6).max(30),
		passwordConfirm: z.string(),
		userName: z.string().min(6).max(30),
	})
	.refine(
		data => {
			return data.password === data.passwordConfirm
		},
		{
			message: 'Passwords do not match',
			path: ['passwordConfirm'],
		},
	)

export type SignUpDataInputs = z.infer<typeof signUpSchema>

type Props = {
	setShowModal: (showModal: boolean) => void
}

export const SignUpForm = ({ setShowModal }: Props) => {
	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<SignUpDataInputs>({
		resolver: zodResolver(signUpSchema),
		mode: 'onBlur',
	})

	const { mutate: registerUser, isPending } = useRegistration()

	const onSubmit: SubmitHandler<SignUpDataInputs> = data => {
		console.log(data)
		const { legal, ...restData } = data
		registerUser(restData, {
			onSuccess: () => {
				setShowModal(true)
			},
			onError: error => {
				return (
					<Typography variant='h2' className='text-red-600'>
						{error?.message}
					</Typography>
				)
			},
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				label={'Username'}
				placeholder={'Epam11'}
				{...register('userName')}
				aria-invalid={!!errors?.userName}
				helperMessage={errors?.userName?.message}
			/>
			<Input
				label={'Email'}
				placeholder={'Epam@epam.com'}
				{...register('email')}
				aria-invalid={!!errors?.email}
				helperMessage={errors?.email?.message}
			/>
			<Input
				label={'Password'}
				placeholder={'Somecool345&^password'}
				type={'password'}
				{...register('password')}
				aria-invalid={!!errors?.password}
				helperMessage={errors?.password?.message}
			/>
			<Input
				label={'Confirm password'}
				{...register('passwordConfirm')}
				aria-invalid={!!errors?.passwordConfirm}
				helperMessage={errors?.passwordConfirm?.message}
				type={'password'}
			/>
			<FormCheckbox
				aria-invalid={!!errors?.legal}
				control={control}
				label={<TermsAndPolicy />}
				name={'legal'}
			/>
			{errors?.legal && (
				<Typography
					asElement={'span'}
					className={cn('block text-danger-500 text-sm')}
				>
					{errors.legal.message}
				</Typography>
			)}
			<Button
				className={'mt-3 mb-4'}
				fullWidth
				type={'submit'}
				variant={'primary'}
			>
				Sign up
			</Button>
		</form>
	)
}