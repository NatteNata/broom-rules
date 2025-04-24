import {
	emailResend,
	login,
	logout,
	newPassword,
	passwordRecovery,
	passwordRecoveryResend,
	registration,
	registrationConfirmation,
	updateTokens,
} from '@api/auth/auth.api'
import type {
	EmailResendArgs,
	LoginArgs,
	NewPasswordArgs,
	PasswordRecoveryArgs,
	PasswordRecoveryResendArgs,
	RegistrationArgs,
	RegistrationConfirmationArgs,
} from '@api/auth/auth.types'
import { useMutation } from '@tanstack/react-query'

export const useLogin = (args: LoginArgs) =>
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

export const useNewPassword = (args: NewPasswordArgs) =>
	useMutation({
		mutationFn: newPassword,
	})

export const usePasswordRecovery = (args: PasswordRecoveryArgs) =>
	useMutation({
		mutationFn: passwordRecovery,
	})

export const usePasswordRecoveryResend = (args: PasswordRecoveryResendArgs) =>
	useMutation({
		mutationFn: passwordRecoveryResend,
	})

export const useRegistration = () =>
	useMutation({
		mutationFn: registration,
	})

export const useRegistrationConfirmation = (
	args: RegistrationConfirmationArgs,
) =>
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