import type { ResendEmail } from '@entities/auth'
import { z } from 'zod'

export const resendPasswordRecoverySchema: z.ZodType<ResendEmail> = z.object({
	email: z.string().email('Must be a valid email address'),
})
