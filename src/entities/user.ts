export type User = {
	userName: string
	email: string
	password: string
}

export type RegisterUser = User & {
	passwordConfirm: string
	agreeToTerms: boolean
}