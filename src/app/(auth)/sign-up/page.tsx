'use client'

import Wrapper from '@/components/wrapper/Wrapper'
import { Button, Card, Checkbox, Input } from '@tornata/brooms-ui'

export default function SignUpPage() {
  return (
    <Wrapper className={'flex flex-col items-center justify-center my-6'}>
      <Card className={'p-6 flex flex-col items-center justify-center max-w-96 gap-2'}>
        <h2>Sign up</h2>
        <form action={''}>
          <Input
            label={'Username'}
            name={'username'}
            placeholder={'Epam11'}
            required
            type={'text'}
          />
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
          <Input label={'Confirm password'} name={'confirmPassword'} required type={'password'} />
          <Checkbox label={'I agree to the Terms of Service and Privacy Policy'} />
          <Button fullWidth variant={'primary'}>
            Sign up
          </Button>
        </form>
        <span>Do you have an account?</span>
        <Button variant={'ghost'}>Sign in</Button>
      </Card>
    </Wrapper>
  )
}
