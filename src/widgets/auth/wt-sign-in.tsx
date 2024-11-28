'use client'

import { A } from '@/components/a/A'
import { FormSignIn } from '@/features/auth/form-sign-in'
import { Button, Card, Typography } from '@tornata/brooms-ui'
import { cn } from 'src/shared/utils'

export const WtSignIn = () => {
  return (
    <Card className={cn('p-6 flex flex-col items-center justify-center max-w-96')}>
      <Typography asElement={'h2'} variant={'h1'}>
        Sign in
      </Typography>
      <FormSignIn />
      <Typography asElement={'span'} className={'text-light-100'} variant={'regular_text_16'}>
        Don&#39;t have an account?
      </Typography>
      <Button asChild className={'mt-1.5'} variant={'ghost'}>
        <A href={'/sign-up'}>Sign up</A>
      </Button>
    </Card>
  )
}
