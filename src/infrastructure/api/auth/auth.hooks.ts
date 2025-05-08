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
import { useMutation, useQuery } from '@tanstack/react-query'

export const useLoginMutation = () =>
	useMutation({
		mutationFn: loginUser,
		onSuccess: data => {
			sessionStorage.setItem('access_token', data.accessToken)
		},
	})

export const useRegisterUserMutation = () =>
	useMutation({
		mutationFn: registerUser,
	})

export const useLogoutMutation = () =>
	useMutation({
		mutationFn: logout,
		onSuccess: () => {
			sessionStorage.removeItem('access_token')
		},
	})

export const useNewPassword = () =>
	useMutation({
		mutationFn: createNewPassword,
	})

export const useRecoverPasswordMutation = () =>
	useMutation({
		mutationFn: recoverPassword,
	})

export const useResendPasswordRecoveryMutation = () =>
	useMutation({
		mutationFn: resendPasswordRecovery,
	})

export const useRegistrationConfirmationMutation = () =>
	useMutation({
		mutationFn: registrationConfirmation,
	})

export const useResendExpiredLinkMutation = () =>
	useMutation({
		mutationFn: resendRegistrationEmail,
	})

export const useMeQuery = () => {
	return useQuery({
		queryKey: ['me'],
		queryFn: getMe,
	})
}
