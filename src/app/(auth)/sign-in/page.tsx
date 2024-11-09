'use client'

import { A } from '@/components/a/A'
import Wrapper from '@/components/wrapper/Wrapper'
import { Button, Card, Input } from '@tornata/brooms-ui'

export default function SignInPage() {
  return (
    <Wrapper className={'flex flex-col items-center justify-start'}>
      <Card className={'p-6 flex flex-col items-center justify-center max-w-96 gap-2 my-6'}>
        <h2>Sign in</h2>
        <form action={''}>
          <Input
            label={'Email'}
            name={'email'}
            placeholder={'Epam@epam.com'}
            required
            type={'email'}
          />
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
        <span>Don&#39;t have an account?</span>
        <Button variant={'ghost'}>Sign up</Button>
      </Card>
    </Wrapper>
  )
}
