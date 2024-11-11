'use client'

import { Wrapper } from '@/components/wrapper/Wrapper'
import { WtSignIn } from '@/widgets/auth/wt-sign-in'

export default function SignInPage() {
  return (
    <Wrapper className={'flex flex-col items-center justify-start'}>
      <WtSignIn />
    </Wrapper>
  )
}
