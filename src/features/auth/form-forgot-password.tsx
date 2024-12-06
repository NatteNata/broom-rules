import { A } from '@/shared/components'
import { Button, Input } from '@tornata/brooms-ui'
import Link from 'next/link'

export const FormForgotPassword = () => {
  return (
    <form action={''}>
      <Input label={'Email'} name={'email'} placeholder={'Epam@epam.com'} required type={'email'} />
      <div className={'flex justify-end'}>
        <A className={'mt-2'} href={'/forgot-password'}>
          Enter your email address and we will send you further instructions
        </A>
      </div>
      <Button asChild className={'mt-6 mb-5'} fullWidth variant={'primary'}>
        <Link href={'/create-new-password'}>Create new password</Link>
      </Button>
    </form>
  )
}
