import type { Auth } from '@entities/auth'

export type User = {
	userId: number
	userName: string
	email: string
	password: string
}

export type RegisterUser = Omit<User, 'userId'> &
	Pick<Auth, 'passwordConfirm' | 'agreeToTerms'>

export type LoginUser = Pick<Auth, 'email' | 'password'>
export type RecoverPassword = Pick<Auth, 'email'>
