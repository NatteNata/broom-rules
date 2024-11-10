import { A } from '@/components/a/A'
import { Button, Input } from '@tornata/brooms-ui'

export const FormSignIn = () => {
  return (
    <form action={''}>
      <Input label={'Email'} name={'email'} placeholder={'Epam@epam.com'} required type={'email'} />
      <Input
        label={'Password'}
        name={'password'}
        placeholder={'Somecool345&^password'}
        required
        type={'password'}
      />
      <A href={'/forgot-password'}>Forgot password?</A>
      <Button asChild fullWidth variant={'primary'}>
        <A href={'/sign-in'}>Sign in</A>
      </Button>
    </form>
  )
}
