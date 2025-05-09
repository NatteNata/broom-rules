export type Auth = {
	accessToken: string
	refreshToken: string
	recaptcha: string
	recoveryCode: string
	password: string
	newPassword: string
	email: string
	passwordConfirm: string
	agreeToTerms: boolean
}

export type ResendEmail = Pick<Auth, 'email'>
