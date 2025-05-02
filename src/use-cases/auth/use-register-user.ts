import type { RegisterUser } from '@entities/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRegisterUserMutation } from '@infrastructure/api'
import { registerUserSchema } from '@infrastructure/validators'
import { useForm } from 'react-hook-form'

export function useRegisterUser() {
	const form = useForm<RegisterUser>({
		resolver: zodResolver(registerUserSchema),
		mode: 'onBlur',
		defaultValues: {
			userName: 'Cranberry',
			email: 'natte@ya.ru',
			password: 'Bramley11*',
			passwordConfirm: 'Bramley11*',
			agreeToTerms: true,
		},
	})

	const { mutate: registerUser, error, isPending } = useRegisterUserMutation()

	return {
		registerUser,
		form,
		isPending,
		error,
	}
}