import {
	createNewPassword,
	getGoogleAuth,
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
import { removeItem, setItem } from '@utils'

export const useLoginMutation = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: loginUser,
		onSuccess: data => {
			queryClient.invalidateQueries({ queryKey: ['me'] })
			setItem('access_token', data.accessToken)
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
		mutationFn: async () => {
			await logout
			removeItem('access_token')
			queryClient.removeQueries({ queryKey: ['me'] })
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['me'] })
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

export const useMeQuery = () => {
	return useQuery({
		queryKey: ['me'],
		queryFn: getMe,
		retry: false,
	})
}

export const useGoogleOAuthMutations = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: getGoogleAuth,
		onSuccess: data => {
			const { accessToken } = data
			setItem('access_token', accessToken)
			queryClient.invalidateQueries({ queryKey: ['me'] })
		},
	})
}