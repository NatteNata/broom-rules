'use client'

import { A } from '@/components/a/A'
import { cn } from '@/utils/merge-class-names'

export default function Home() {
  return (
    <nav className={cn('flex items-center justify-items-start mx-2 mt-4')}>
      <ul className={'list-none'}>
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
      </ul>
    </nav>
  )
}
