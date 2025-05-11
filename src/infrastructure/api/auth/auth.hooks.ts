import {
	createNewPassword,
	getMe,
	loginUser,
	logout,
	recoverPassword,
	registerUser,
	registrationConfirmation,
	resendPasswordRecovery,
	resendRegistrationEmail,
} from '@infrastructure/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useLoginMutation = () => {
	return useMutation({
		mutationFn: loginUser,
		onSuccess: data => {
			sessionStorage.setItem('access_token', data.accessToken)
		},
	})
}

export const useRegisterUserMutation = () => {
	return useMutation({
		mutationFn: registerUser,
	})
}

export const useLogoutMutation = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: logout,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['me'] })
			sessionStorage.removeItem('access_token')
		},
	})
}

export const useNewPassword = () => {
	return useMutation({
		mutationFn: createNewPassword,
	})
}

export const useRecoverPasswordMutation = () => {
	return useMutation({
		mutationFn: recoverPassword,
	})
}

export const useResendPasswordRecoveryMutation = () => {
	return useMutation({
		mutationFn: resendPasswordRecovery,
	})
}

export const useRegistrationConfirmationMutation = () => {
	return useMutation({
		mutationFn: registrationConfirmation,
	})
}

export const useResendExpiredLinkMutation = () => {
	return useMutation({
		mutationFn: resendRegistrationEmail,
	})
}

export const useMeQuery = (isAuthed: boolean) => {
	return useQuery({
		queryKey: ['me'],
		queryFn: getMe,
		enabled: isAuthed,
	})
}