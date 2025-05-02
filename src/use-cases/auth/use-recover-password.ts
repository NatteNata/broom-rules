import type { RecoverPassword } from '@entities/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRecoverPasswordMutation } from '@infrastructure/api'
import { forgotPasswordSchema } from '@infrastructure/validators'
import { useForm } from 'react-hook-form'

export function useRecoverPassword() {
	const {
		mutate: recoverPassword,
		isPending,
		isSuccess,
		error,
	} = useRecoverPasswordMutation()

	const form = useForm<RecoverPassword>({
		resolver: zodResolver(forgotPasswordSchema),
		mode: 'onBlur',
	})

	return {
		recoverPassword,
		isPending,
		error,
		isSuccess,
		form,
	}
}