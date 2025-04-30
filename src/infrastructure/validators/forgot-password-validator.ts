import { z } from 'zod'

const passwordRegex =
	/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]).*$/

export const forgotPasswordSchema = z.object({
	email: z
		.string()
		.email('Must be a valid email address')
		.regex(passwordRegex, {
			message:
				'Password must contain: 0-9, A-Z, a-z, and at least one special character: !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
		}),
})

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>