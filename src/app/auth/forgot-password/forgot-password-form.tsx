'use client'

import { Link } from '@components'
import type { RecoverPassword } from '@entities/user'
import { DevTool } from '@hookform/devtools'
import { Button, Input, Typography } from '@tornata/penguin-ui'
import { useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useRecoverPassword } from 'src/use-cases/auth/use-recover-password'

type Props = {
	token: string
}

export const ForgotPasswordForm = ({ token }: Props) => {
	const [showMore, setShowMore] = useState(false)
	const { form, recoverPassword, error, isPending } = useRecoverPassword()

	const {
		register,
		handleSubmit,
		control,
		formState: { isValid, errors },
	} = form

	const onSubmit: SubmitHandler<RecoverPassword> = data => {
		recoverPassword({ email: data.email, recaptcha: token })
		setShowMore(true)
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

					{showMore && (
						<>
							<div>
								<Typography
									as={'p'}
									variant={'regular_text-14 text-light-100 font-light'}
								>
									The link has been sent by email. If you don’t receive an email
									send link again.
								</Typography>
							</div>
							<div>
								<Button
									type='submit'
									className={
										'mt-6 mb-5 disabled:pointer-events-none disabled:text-light-100 disabled:opacity-80'
									}
									fullWidth
									variant={'primary'}
									asChild
									disabled={!isValid || !token}
								>
									<Link href={'/auth/resend-password-recovery'}>
										Send Link Again
									</Link>
								</Button>
							</div>
						</>
					)}

					{!showMore && (
						<Button
							type='submit'
							className={
								'mt-6 mb-5 disabled:pointer-events-none disabled:text-light-100 disabled:opacity-80'
							}
							fullWidth
							variant={'primary'}
							disabled={!isValid || !token}
						>
							Send Link
						</Button>
					)}
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
