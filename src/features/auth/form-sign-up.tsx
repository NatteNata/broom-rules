import { A } from '@/components/a/A'
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
      <Input label={'Confirm password'} name={'confirmPassword'} required type={'password'} />
      <Checkbox label={TACs} name={'tacs'} />
      <Button fullWidth variant={'primary'}>
        Sign up
      </Button>
    </form>
  )
}

const TACs = (
  <Typography asElement={'p'} variant={'small_text'}>
    I agree to the
    <A href={'/terms-of-service'}>
      <Typography asElement={'span'} variant={'small_link'}>
        Terms of Service
      </Typography>
    </A>
    and
    <A href={'/privacy-policy'}>
      <Typography asElement={'span'} variant={'small_link'}>
        Privacy Policy
      </Typography>
    </A>
  </Typography>
)
