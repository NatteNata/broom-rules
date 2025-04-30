'use client'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Typography } from 'penguin-ui'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { usePasswordRecovery } from '@infrastructure/api'
import {
	type ForgotPasswordFormData,
	forgotPasswordSchema,
} from '@infrastructure/validators'

export const ForgotPasswordForm = ({
	submitDisable,
	token,
}: { token: string; submitDisable: boolean }) => {
	const [needResend, setNeedResend] = useState(false)
	const { mutate: recoverPassword, isPending } = usePasswordRecovery()

	const form = useForm<ForgotPasswordFormData>({
		resolver: zodResolver(forgotPasswordSchema),
		mode: 'onBlur',
	})
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = form

	const buttonText = needResend ? 'Send Link Again' : 'Send Link'

	const onSubmit: SubmitHandler<ForgotPasswordFormData> = data => {
		recoverPassword(
			{ email: data.email, recaptcha: token },
			{
				onSuccess: () => {
					setNeedResend(true)
				},
			},
		)
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
					<div>
						{needResend && (
							<Typography
								as={'p'}
								variant={'regular_text-14 text-light-100 font-light'}
							>
								The link has been sent by email. If you don’t receive an email
								send link again.
							</Typography>
						)}
					</div>
					<Button
						type='submit'
						className={
							'mt-6 mb-5 disabled:pointer-events-none disabled:text-light-100 disabled:opacity-80'
						}
						fullWidth
						variant={'primary'}
						disabled={submitDisable}
					>
						{buttonText}
					</Button>
				</fieldset>
			</form>
			<DevTool control={control} />
		</>
	)
}