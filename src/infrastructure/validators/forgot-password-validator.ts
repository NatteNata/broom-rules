import type { RecoverPassword } from '@entities/user'
import { z } from 'zod'

export const forgotPasswordSchema: z.ZodType<RecoverPassword> = z.object({
	email: z.string().email('Must be a valid email address'),
})