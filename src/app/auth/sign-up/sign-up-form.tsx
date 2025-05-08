'use client'

import { FormCheckbox } from '@components'
import type { RegisterUser } from '@entities/user'
import { DevTool } from '@hookform/devtools'

import { useRegisterUser } from '@use-cases'
import { Button, Input, Typography } from 'penguin-ui'
import type { SubmitHandler } from 'react-hook-form'
import { SignUpTerms } from './sign-up-terms'

type Props = {
	onFormSubmit: string
}

export const SignUpForm = ({ onFormSubmit }: Props) => {
	const foo = JSON.parse(onFormSubmit)
	const { form, registerUser, isPending, error } = useRegisterUser()

	const {
		handleSubmit,
		register,
		control,
		formState: { isValid, errors },
	} = form

	const onSubmit: SubmitHandler<RegisterUser> = data => {
		const { agreeToTerms, passwordConfirm, ...requestArgs } = data
		registerUser(requestArgs, {
			onSuccess: () => foo(data.email),
		})
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} noValidate className='group'>
				<fieldset disabled={isPending} className='group-disabled:opacity-80'>
					<Input
						label={'Username'}
						placeholder={'Epam11'}
						{...register('userName')}
						hasError={!!errors?.userName}
						helperMessage={errors?.userName?.message}
					/>
					<Input
						label={'Email'}
						placeholder={'Epam@epam.com'}
						{...register('email')}
						hasError={!!errors?.email}
						helperMessage={errors?.email?.message}
					/>
					<Input
						label={'Password'}
						placeholder={'Somecool345&^password'}
						type={'password'}
						{...register('password')}
						hasError={!!errors?.password}
						helperMessage={errors?.password?.message}
					/>
					<Input
						label={'Confirm password'}
						{...register('passwordConfirm')}
						type={'password'}
						hasError={!!errors?.passwordConfirm}
						helperMessage={errors?.passwordConfirm?.message}
					/>
					<FormCheckbox
						label={<SignUpTerms />}
						name='agreeToTerms'
						control={control}
						hasError={!!errors?.agreeToTerms}
					/>
					{!!errors?.agreeToTerms && (
						<Typography
							asElement='span'
							className='block text-danger-500 text-sm'
						>
							{errors.agreeToTerms.message}
						</Typography>
					)}
					<Button
						className={'mt-3 mb-4 disabled:cursor-not-allowed'}
						fullWidth
						type={'submit'}
						variant={'primary'}
						disabled={isPending || !isValid}
					>
						{isPending ? 'Submitting...' : 'Sign up'}
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
			<DevTool control={control} />
		</>
	)
}
