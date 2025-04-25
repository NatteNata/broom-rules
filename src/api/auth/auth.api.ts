import type {
	AuthResponse,
	EmailResendArgs,
	LoginArgs,
	LoginResponse,
	NewPasswordArgs,
	PasswordRecoveryArgs,
	PasswordRecoveryResendArgs,
	RecoveryCodeArgs,
	RecoveryCodeResponse,
	RegistrationArgs,
	RegistrationConfirmationArgs,
	UpdateTokensResponse,
} from '@api/auth/auth.types'
import ky from 'ky'

const authApi = ky.create({
	prefixUrl: `${process.env.NEXT_PUBLIC_API_URL}api/v1/auth`,
})

export const checkRecoveryCode = async (json: RecoveryCodeArgs) => {
	await authApi
		.post<RecoveryCodeResponse>('check-recovery-code', { json })
		.json()
}

export const login = async (json: LoginArgs) => {
	await authApi.post<LoginResponse>('login', { json }).json()
}

export const logout = async () => {
	await authApi.post('logout', {}).json()
}

export const newPassword = async (json: NewPasswordArgs) => {
	await authApi.post('new-password', { json }).json()
}

export const passwordRecovery = async (json: PasswordRecoveryArgs) => {
	await authApi.post('password-recovery', { json }).json()
}

export const passwordRecoveryResend = async (
	json: PasswordRecoveryResendArgs,
) => {
	await authApi.post('password-recovery-resending', { json }).json()
}

export const registration = async (json: RegistrationArgs) => {
	await authApi.post<AuthResponse>('registration', { json }).json()
}

export const registrationConfirmation = async (
	json: RegistrationConfirmationArgs,
) => {
	await authApi
		.post<AuthResponse>('registration-confirmation', {
			json,
		})
		.json()
}

export const emailResend = async (json: EmailResendArgs) => {
	await authApi
		.post<AuthResponse>('registration-email-resending', {
			json,
		})
		.json()
}

export const updateTokens = async () => {
	await authApi.post<UpdateTokensResponse>('update-tokens', {}).json()
}
