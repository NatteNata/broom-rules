'use client'

import { Wrapper } from '@/shared/components'
import { SignInCard } from '@/widgets/auth/sign-in-card'

export default function SignInPage() {
  return (
    <Wrapper className={'flex flex-col items-center justify-start my-6'}>
      <SignInCard />
    </Wrapper>
  )
}
