import { A } from '@/shared/components'
import { Button, Checkbox, Input, Typography } from '@tornata/brooms-ui'

export const FormSignUp = () => {
  return (
    <form action={''}>
      <Input label={'Username'} name={'username'} placeholder={'Epam11'} required type={'text'} />
      <Input label={'Email'} name={'email'} placeholder={'Epam@epam.com'} required type={'email'} />
      <Input
        label={'Password'}
        name={'password'}
        placeholder={'Somecool345&^password'}
        required
        type={'password'}
      />
      <Input
        className={'mb-3'}
        label={'Confirm password'}
        name={'confirmPassword'}
        required
        type={'password'}
      />
      <Checkbox label={TACs} name={'tacs'} />
      <Button className={'mt-3 mb-4'} fullWidth variant={'primary'}>
        Sign up
      </Button>
    </form>
  )
}

const TACs = (
  <Typography asElement={'p'} variant={'small_text'}>
    I agree to the
    <A href={'/terms-of-service'}>
      <Typography asElement={'span'} className={'mx-1'} variant={'small_link'}>
        Terms of Service
      </Typography>
    </A>
    and
    <A href={'/privacy-policy'}>
      <Typography asElement={'span'} className={'mx-1'} variant={'small_link'}>
        Privacy Policy
      </Typography>
    </A>
  </Typography>
)
