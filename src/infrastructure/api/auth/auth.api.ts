import type {
	EmailResendArgs,
	GetGoogleAuthArgs,
	GetGoogleAuthResponse,
	LoginArgs,
	LoginResponse,
	MeResponse,
	NewPasswordArgs,
	PasswordRecoveryResendArgs,
	RecoverPasswordArgs,
	RecoveryCodeArgs,
	RecoveryCodeResponse,
	RegistrationArgs,
	RegistrationConfirmationArgs,
} from '@infrastructure/api'

import { baseApi } from '../base.api'

const authApi = baseApi.extend({
	prefixUrl: `${process.env.NEXT_PUBLIC_API_URL}api/v1/auth`,
})

export const registerUser = async (json: RegistrationArgs) => {
	await authApi.post('registration', { json }).json()
}

export const loginUser = async (json: LoginArgs) => {
	return await authApi.post<LoginResponse>('login', { json }).json()
}

export const recoverPassword = async (json: RecoverPasswordArgs) => {
	await authApi.post('password-recovery', { json }).json()
}

export const logout = async () => {
	await authApi.post('logout', {}).json()
}

export const checkRecoveryCode = async (json: RecoveryCodeArgs) => {
	await authApi
		.post<RecoveryCodeResponse>('check-recovery-code', { json })
		.json()
}

export const createNewPassword = async (json: NewPasswordArgs) => {
	await authApi.post('new-password', { json }).json()
}

export const resendPasswordRecovery = async (
	json: PasswordRecoveryResendArgs,
) => {
	await authApi.post('password-recovery-resending', { json }).json()
}

export const resendRegistrationEmail = async (json: EmailResendArgs) => {
	await authApi.post('registration-email-resending', { json }).json()
}

export const registrationConfirmation = async (
	json: RegistrationConfirmationArgs,
) => {
	await authApi.post('registration-confirmation', { json }).json()
}

export const getMe = async () => {
	return await authApi.get<MeResponse>('me').json()
}

export const getGoogleAuth = async (json: GetGoogleAuthArgs) => {
	return await authApi
		.post<GetGoogleAuthResponse>('google/login', { json })
		.json()
}
