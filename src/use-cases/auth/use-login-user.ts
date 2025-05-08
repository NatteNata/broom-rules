import type { LoginUser } from '@entities/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoginMutation } from '@infrastructure/api'
import { signInSchema } from '@infrastructure/validators'
import { useForm } from 'react-hook-form'

export function useLoginUser() {
	const form = useForm<LoginUser>({
		resolver: zodResolver(signInSchema),
		mode: 'onBlur',
	})

	const { mutate: loginUser, isPending, isSuccess, error } = useLoginMutation()

	return {
		form,
		loginUser,
		isPending,
		error,
		isSuccess,
	}
}
