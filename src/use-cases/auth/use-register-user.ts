import type { RegisterUser } from '@entities/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRegisterUserMutation } from '@infrastructure/api'
import { registerUserSchema } from '@infrastructure/validators'
import { useForm } from 'react-hook-form'

export function useRegisterUser() {
	const form = useForm<RegisterUser>({
		resolver: zodResolver(registerUserSchema),
		mode: 'onBlur',
	})

	const { mutate: registerUser, error, isPending } = useRegisterUserMutation()

	return {
		registerUser,
		form,
		isPending,
		error,
	}
}
