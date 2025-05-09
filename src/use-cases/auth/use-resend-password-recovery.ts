import type { ResendEmail } from '@entities/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useResendPasswordRecoveryMutation } from '@infrastructure/api'
import { resendPasswordRecoverySchema } from '@infrastructure/validators'
import { useForm } from 'react-hook-form'

export function useResendPasswordRecovery() {
	const form = useForm<ResendEmail>({
		resolver: zodResolver(resendPasswordRecoverySchema),
		mode: 'onBlur',
	})

	const {
		mutate: resendLink,
		error,
		isSuccess,
		isPending,
	} = useResendPasswordRecoveryMutation()

	return {
		resendLink,
		form,
		error,
		isSuccess,
		isPending,
	}
}
