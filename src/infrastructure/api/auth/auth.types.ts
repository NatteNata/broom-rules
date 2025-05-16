import type { Auth } from '@entities/auth'
import type { RegisterUser, User } from '@entities/user'

export type LoginArgs = Pick<Auth, 'email' | 'password'>
export type RecoverPasswordArgs = Pick<Auth, 'email' | 'recaptcha'>
export type PasswordRecoveryResendArgs = Pick<Auth, 'email'>
export type EmailResendArgs = Pick<Auth, 'email'>
export type RegistrationConfirmationArgs = {
	confirmationCode: string
}

export type RegistrationArgs = Omit<
	RegisterUser,
	'agreeToTerms' | 'passwordConfirm'
>

export type GetGoogleAuthArgs = {
	redirectUrl: string
	code: string
}

export type NewPasswordArgs = {
	newPassword: string
	recoveryCode: string
}

export type RecoveryCodeArgs = {
	recoveryCode: string
}

export type LoginResponse = Pick<Auth, 'accessToken'>
export type UpdateTokenResponse = Pick<Auth, 'accessToken'>
export type GetGoogleAuthResponse = Pick<Auth, 'accessToken' | 'email'>
export type MeResponse = Omit<User, 'password'> & {
	isBlocked: boolean
}

export type ServerError = {
	error: string
	messages: [
		{
			field: string
			message: string
		},
	]
	statusCode: number
}

export type RecoveryCodeResponse = {
	email: string
}
