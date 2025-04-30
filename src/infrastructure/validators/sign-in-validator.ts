import { z } from 'zod'

const passwordRegex =
	/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]).*$/

export const signInSchema = z.object({
	email: z.string().email('Must be a valid email address'),
	password: z.string().min(6).max(30).regex(passwordRegex, {
		message:
			'Password must contain: 0-9, A-Z, a-z, and at least one special character: !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
	}),
})

export type SignInFormData = z.infer<typeof signInSchema>