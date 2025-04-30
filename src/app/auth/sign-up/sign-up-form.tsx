'use client'

import { FormCheckbox } from '@components'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Typography } from 'penguin-ui'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useRegistration } from '@infrastructure/api'
import { type SignUpFormData, signUpSchema } from '@infrastructure/validators'
import { cn } from '@utils'

import { SignUpTerms } from './sign-up-terms'

type Props = {
	onFormSubmit: (email: string) => void
}

export const SignUpForm = ({ onFormSubmit }: Props) => {
	const form = useForm<SignUpFormData>({
		resolver: zodResolver(signUpSchema),
		mode: 'onBlur',
	})

	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
	} = form

	const { mutate: registerUser, isPending } = useRegistration()

	const onSubmit: SubmitHandler<SignUpFormData> = data => {
		const { legal, ...restData } = data
		registerUser(restData, {
			onSuccess: () => onFormSubmit(data.email),
			onError: error => {
				return <h1>{error.message}</h1>
			},
		})
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} noValidate className='group'>
				<fieldset
					disabled={isPending}
					className='group-disabled:pointer-events-none group-disabled:opacity-80'
				>
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
						label={<SignUpTerms />}
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
				</fieldset>
			</form>
			<DevTool control={control} />
		</>
	)
}