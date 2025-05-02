import {
	createNewPassword,
	loginUser,
	logout,
	recoverPassword,
	registerUser,
	registrationConfirmation,
	resendPasswordRecovery,
	resendRegistrationEmail,
} from '@infrastructure/api'
import { useMutation } from '@tanstack/react-query'

export const useLoginMutation = () =>
	useMutation({
		mutationFn: loginUser,
		onSuccess: data => {
			sessionStorage.setItem('access_token', JSON.stringify(data))
		},
	})

export const useRegisterUserMutation = () =>
	useMutation({
		mutationFn: registerUser,
	})

export const useLogout = () =>
	useMutation({
		mutationFn: logout,
		onSuccess: () => {
			sessionStorage.remove('access_token')
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

export const useRegistrationConfirmation = () =>
	useMutation({
		mutationFn: registrationConfirmation,
	})

export const useResendExpiredLinkMutation = () =>
	useMutation({
		mutationFn: resendRegistrationEmail,
	})