import type { Auth } from '@entities/auth'

export type User = {
	userName: string
	email: string
	password: string
}

export type RegisterUser = User & Pick<Auth, 'passwordConfirm' | 'agreeToTerms'>

export type LoginUser = Pick<Auth, 'email' | 'password'>
export type RecoverPassword = Pick<Auth, 'email'>