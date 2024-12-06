import { FormSignUp } from '@/features/auth/form-sign-up'
import { Button, Card, Typography } from '@tornata/brooms-ui'
import Link from 'next/link'
import { cn } from 'src/shared/utils'

export const SignUpCard = () => {
  return (
    <>
      <Card className={cn('p-6 flex flex-col items-center justify-center max-w-96')}>
        <Typography asElement={'h2'} variant={'h1'}>
          Sign up
        </Typography>
        <FormSignUp />
        <Typography asElement={'span'} variant={'regular_text_16'}>
          Do you have an account?
        </Typography>
        <Button asChild className={'mt-1.5'} variant={'ghost'}>
          <Link href={'/sign-in'}>Sign in</Link>
        </Button>
      </Card>
    </>
  )
}
