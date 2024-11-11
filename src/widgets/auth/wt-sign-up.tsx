import { A } from '@/components/a/A'
import { FormSignUp } from '@/features/auth/form-sign-up'
import { cn } from '@/utils'
import { Button, Card, Typography } from '@tornata/brooms-ui'

export const WtSignUp = () => {
  return (
    <>
      <Card
        className={cn('p-6 bg-green-400 flex flex-col items-center justify-center max-w-96 gap-2')}
      >
        <Typography asElement={'h2'} variant={'h1'}>
          Sign up
        </Typography>
        <FormSignUp />
        <Typography asElement={'span'} variant={'regular_text_16'}>
          Do you have an account?
        </Typography>
        <Button asChild variant={'ghost'}>
          <A href={'/sign-in'}>Sign in</A>
        </Button>
      </Card>
      <Card className={'bg-amber-600 p-12 m-6'}>TEST</Card>
      <div className={cn('bg-lime-400 text-red-300 p-16 m-6')}>NATIVE DIV</div>
    </>
  )
}
