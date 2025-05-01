import {
	emailResend,
	login,
	logout,
	newPassword,
	passwordRecovery,
	passwordRecoveryResend,
	registerUser,
	registrationConfirmation,
	updateTokens,
} from '@infrastructure/api'
import type {
	EmailResendArgs,
	PasswordRecoveryResendArgs,
} from '@infrastructure/api'
import { useMutation } from '@tanstack/react-query'

export const useLogin = () =>
	useMutation({
		mutationFn: login,
		onSuccess: data => {
			sessionStorage.set('accessToken', data)
		},
	})

export const useLogout = () =>
	useMutation({
		mutationFn: logout,
		onSuccess: () => {
			sessionStorage.remove('accessToken')
		},
	})

export const useNewPassword = () =>
	useMutation({
		mutationFn: newPassword,
	})

export const usePasswordRecovery = () =>
	useMutation({
		mutationFn: passwordRecovery,
	})

export const usePasswordRecoveryResend = (args: PasswordRecoveryResendArgs) =>
	useMutation({
		mutationFn: passwordRecoveryResend,
	})

export const useRegisterUserMutation = () =>
	useMutation({
		mutationFn: registerUser,
	})

export const useRegistrationConfirmation = () =>
	useMutation({
		mutationFn: registrationConfirmation,
	})

export const useEmailResent = (args: EmailResendArgs) =>
	useMutation({
		mutationFn: emailResend,
	})

export const useUpdateTokens = () =>
	useMutation({
		mutationFn: updateTokens,
	})