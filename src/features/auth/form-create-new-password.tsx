import { A } from '@/shared/components'
import { Button, Input } from '@tornata/brooms-ui'
import Link from 'next/link'

export const FormCreateNewPassword = () => {
  return (
    <form action={''}>
      <Input
        label={'New password'}
        name={'newpass'}
        placeholder={'Somecool345&^password'}
        required
        type={'password'}
      />
      <Input
        label={'Password confirmation'}
        name={'confirmpass'}
        placeholder={'Somecool345&^password'}
        required
        type={'password'}
      />
      <div className={'flex justify-end'}>
        <A className={'mt-2'} href={'/forgot-password'}>
          Your password must be between 6 and 20 characters
        </A>
      </div>
      <Button asChild className={'mt-6 mb-5'} fullWidth variant={'primary'}>
        <Link href={'/sign-in'}>Create new password</Link>
      </Button>
    </form>
  )
}
