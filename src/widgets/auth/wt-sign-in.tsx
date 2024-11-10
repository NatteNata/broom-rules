import { A } from '@/components/a/A'
import { FormSignIn } from '@/features/auth/form-sign-in'
import { Button, Card, Typography } from '@tornata/brooms-ui'

export const WtSignIn = () => {
  return (
    <Card className={'p-6 flex flex-col items-center justify-center max-w-96 gap-2 my-6'}>
      <Typography asElement={'h2'} variant={'h1'}>
        Sign in
      </Typography>
      <FormSignIn />
      <Typography asElement={'span'} variant={'regular_text_16'}>
        Don&#39;t have an account?
      </Typography>
      <Button asChild variant={'ghost'}>
        <A href={'/sign-up'}>Sign up</A>
      </Button>
    </Card>
  )
}
