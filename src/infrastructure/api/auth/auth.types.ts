export type RegistrationArgs = {
	email: string
	password: string
	userName: string
}

export type AuthResponse = {
	error: string
	messages: [
		{
			field: string
			message: string
		},
	]
	statusCode: number
}

export type RegistrationConfirmationArgs = {
	confirmationCode: string
}

export type EmailResendArgs = {
	email: string
}

export type UpdateTokensResponse = {
	accessToken: string
}

export type PasswordRecoveryArgs = {
	email: string
	recaptcha: string
}

export type PasswordRecoveryResendArgs = Pick<PasswordRecoveryArgs, 'email'>

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

export type LoginArgs = {
	email: string
	password: string
}

export type LoginResponse = {
	accessToken: string
} & AuthResponse
