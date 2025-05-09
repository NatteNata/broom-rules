import type { ResendEmail } from '@entities/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useResendExpiredLinkMutation } from '@infrastructure/api'
import { resendPasswordRecoverySchema } from '@infrastructure/validators'
import { useForm } from 'react-hook-form'

export function useResendEmail() {
	const form = useForm<ResendEmail>({
		resolver: zodResolver(resendPasswordRecoverySchema),
		mode: 'onBlur',
	})

	const {
		mutate: resendRegistrationEmail,
		isPending,
		isSuccess,
		error,
	} = useResendExpiredLinkMutation()

	return {
		form,
		resendRegistrationEmail,
		isPending,
		isSuccess,
		error,
	}
}
