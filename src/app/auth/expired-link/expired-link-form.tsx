import type { ResendEmail } from '@entities/auth'
import { DevTool } from '@hookform/devtools'
import { Button, Input, Typography } from 'penguin-ui'
import type { SubmitHandler } from 'react-hook-form'
import { useResendEmail } from 'src/use-cases/auth/use-resend-expired-link'

type Props = {
	onFormSubmit: (email: string) => void
}

export const ExpiredLinkForm = ({ onFormSubmit }: Props) => {
	const { form, resendRegistrationEmail, isPending, error } = useResendEmail()

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = form

	const onSubmit: SubmitHandler<ResendEmail> = data => {
		resendRegistrationEmail(
			{ email: data.email },
			{
				onSuccess: () => onFormSubmit(data.email),
			},
		)
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} noValidate className='group'>
				<fieldset disabled={isPending} className={'group-disabled:opacity-80'}>
					<Input
						type='email'
						{...register('email')}
						placeholder='Epam@epam.com'
						label='Email'
						hasError={!!errors?.email}
						helperMessage={errors?.email?.message}
					/>
					<Button variant='primary' className='mb-2 px-12' type='submit'>
						Resend verification link
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
