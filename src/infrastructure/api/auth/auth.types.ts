import type { Auth } from '@entities/auth'
import type { LoginUser, RegisterUser, User } from '@entities/user'

export type RegistrationArgs = Omit<
	RegisterUser,
	'agreeToTerms' | 'passwordConfirm'
>

export type LoginArgs = LoginUser

export type LoginResponse = Pick<Auth, 'accessToken'>

export type UpdateTokenResponse = Pick<Auth, 'accessToken'>

export type RecoverPasswordArgs = Pick<Auth, 'email' | 'recaptcha'>

export type MeResponse = Omit<User, 'password'> & {
	isBlocked: boolean
}

export type RegistrationConfirmationArgs = {
	confirmationCode: string
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

export type EmailResendArgs = {
	email: string
}

export type PasswordRecoveryResendArgs = Pick<RecoverPasswordArgs, 'email'>

export type NewPasswordArgs = {
	newPassword: string
	recoveryCode: string
}

export type RecoveryCodeArgs = {
	recoveryCode: string
}

export type RecoveryCodeResponse = {
	email: string
}
