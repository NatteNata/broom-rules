'use client'

import { FormForgotPassword } from '@/features/auth/form-forgot-password'
import { Button, Card, Typography } from '@tornata/brooms-ui'
import Link from 'next/link'
import { cn } from 'src/shared/utils'

export const ForgotPasswordCard = () => {
  return (
    <Card className={cn('p-6 flex flex-col items-center justify-center max-w-96')}>
      <Typography asElement={'h2'} variant={'h1'}>
        Forgot Password
      </Typography>
      <FormForgotPassword />
      <Button asChild fullWidth variant={'ghost'}>
        <Link href={'/sign-in'}>Back to Sign in</Link>
      </Button>
    </Card>
  )
}
