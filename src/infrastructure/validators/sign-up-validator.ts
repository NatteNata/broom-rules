import { z } from 'zod'

const passwordRegex =
	/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]).*$/

export const signUpSchema = z
	.object({
		email: z.string().email('Must be a valid email address'),
		legal: z.literal(true, {
			errorMap: () => ({ message: 'You must agree to Terms and Policy' }),
		}),
		password: z.string().min(6).max(30).regex(passwordRegex, {
			message:
				'Password must contain: 0-9, A-Z, a-z, and at least one special character: !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
		}),
		passwordConfirm: z.string(),
		userName: z.string().min(6).max(30),
	})
	.refine(
		data => {
			return data.password === data.passwordConfirm
		},
		{
			message: 'Passwords do not match',
			path: ['passwordConfirm'],
		},
	)

export type SignUpFormData = z.infer<typeof signUpSchema>