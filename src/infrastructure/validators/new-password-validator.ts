import { z } from 'zod'

const passwordRegex =
	/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]).*$/

export const newPasswordSchema = z
	.object({
		newpass: z.string().min(6).max(30).regex(passwordRegex, {
			message:
				'Password must contain: 0-9, A-Z, a-z, and at least one special character: !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
		}),
		confirmpass: z.string(),
	})
	.refine(
		data => {
			return data.newpass === data.confirmpass
		},
		{
			message: 'Passwords do not match',
			path: ['passwordConfirm'],
		},
	)

export type NewPasswordFormData = z.infer<typeof newPasswordSchema>