import { A } from '@/components/A'

import { Button } from '../../../broom-rules-ui'

export default function Home() {
  return (
    <nav className={'flex items-center justify-items-start mx-6 my-4'}>
      <ul>
        <li>
          <A href={'/sign-up'}>Sign up</A>
        </li>
        <li>
          <A href={'/sign-in'}>Sign in</A>
        </li>
        <li>
          <A href={'/forgot-password'}>Forgot password</A>
        </li>
        <li>
          <A href={'/create-new-password'}>Create new password</A>
        </li>
        <li>
          <A href={'/expired-link'}>Expired link</A>
        </li>
        <Button>Does it really work?</Button>
      </ul>
    </nav>
  )
}
