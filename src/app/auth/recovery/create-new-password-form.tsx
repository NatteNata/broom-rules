'use client'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNewPassword } from '@infrastructure/api'
import {
	type NewPasswordFormData,
	newPasswordSchema,
} from '@infrastructure/validators'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button, Input, Typography } from 'penguin-ui'
import { type SubmitHandler, useForm } from 'react-hook-form'

export const CreateNewPasswordForm = () => {
	const { code } = Object.fromEntries(useSearchParams())
	const router = useRouter()

	const form = useForm<NewPasswordFormData>({
		resolver: zodResolver(newPasswordSchema),
		mode: 'onBlur',
	})

	const { mutate: createNewPassword, isPending, error } = useNewPassword()

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = form

	const onSubmit: SubmitHandler<NewPasswordFormData> = data => {
		createNewPassword(
			{
				newPassword: data.newpass,
				recoveryCode: code,
			},
			{
				onSuccess: () => router.push('/auth/login'),
			},
		)
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} noValidate className='group'>
				<fieldset
					disabled={isPending}
					className='group-disabled:pointer-events-none group-disabled:opacity-80'
				>
					<Input
						label={'New password'}
						{...register('newpass')}
						placeholder={'Somecool345&^password'}
						required
						type={'password'}
						aria-invalid={!!errors?.newpass}
						helperMessage={errors?.newpass?.message}
					/>
					<Input
						label={'Password confirmation'}
						{...register('confirmpass')}
						placeholder={'Somecool345&^password'}
						required
						type={'password'}
						aria-invalid={!!errors?.confirmpass}
						helperMessage={errors?.confirmpass?.message}
					/>
					<div className={'flex justify-end'}>
						<Typography
							className={'mt-2 font-light'}
							as={'span'}
							variant={'regular_text_14'}
						>
							Your password must be between 6 and 20 characters
						</Typography>
					</div>
					<Button
						className={'mt-6 mb-5'}
						fullWidth
						variant={'primary'}
						type={'submit'}
					>
						Create new password
					</Button>
				</fieldset>
			</form>
			{error && (
				<Typography
					as={'p'}
					variant={'h3'}
					className={'py-4 text-center text-danger-500'}
				>
					{error.message}
				</Typography>
			)}
			<DevTool control={control} />
		</>
	)
}
