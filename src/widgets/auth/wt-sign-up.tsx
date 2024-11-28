import { A } from '@/components/a/A'
import { FormSignUp } from '@/features/auth/form-sign-up'
import { Button, Card, Typography } from '@tornata/brooms-ui'
import { cn } from 'src/shared/utils'

export const WtSignUp = () => {
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
          <A href={'/sign-in'}>Sign in</A>
        </Button>
      </Card>
    </>
  )
}
