'use client'

import type { ResendEmail } from '@entities/auth'
import { DevTool } from '@hookform/devtools'
import { useResendPasswordRecovery } from '@use-cases'
import { useRouter } from 'next/navigation'
import { Button, Input, Typography } from 'penguin-ui'
import type { SubmitHandler } from 'react-hook-form'

export const ResendPasswordRecoveryForm = () => {
	const router = useRouter()
	const { form, resendLink, error, isPending, isSuccess } =
		useResendPasswordRecovery()

	const {
		register,
		handleSubmit,
		control,
		formState: { isValid, errors },
	} = form

	const onSubmit: SubmitHandler<ResendEmail> = data => {
		resendLink({ email: data.email })
	}

	if (isSuccess) {
		router.push('/auth/sign-in')
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className='group' noValidate>
				<fieldset
					disabled={isPending}
					className='group-disabled:pointer-events-none group-disabled:opacity-80'
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
					<div className='mb-6'>
						<Typography
							as={'p'}
							variant={'regular_text-14 text-light-900 font-light'}
						>
							Enter your email address and we will send you further
							instructions.
						</Typography>
					</div>
					<Button
						type='submit'
						className={
							'mt-6 mb-5 disabled:pointer-events-none disabled:text-light-100 disabled:opacity-80'
						}
						fullWidth
						variant={'primary'}
						disabled={!isValid}
					>
						Send Link
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