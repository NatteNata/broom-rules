'use client'
import { A } from '@/components/a/A'
import { Button } from '@tornata/broom-ui'
import Link from 'next/link'
import { cn } from 'src/shared/utils'

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
        <li>
          <A href={'/terms-of-service'}>Terms of Service</A>
        </li>
        <li>
          <A href={'/privacy-policy'}>Privacy Policy</A>
        </li>
        <li>
          <A href={'/test-run'}>Test run</A>
        </li>
      </ul>
      <Button asChild>
        <Link href={'/sign-in'}>Test button</Link>
      </Button>
    </nav>
  )
}
