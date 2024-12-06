'use client'

import { Wrapper } from '@/shared/components'
import { SignUpCard } from '@/widgets/auth/sign-up-card'

export default function SignUpPage() {
  return (
    <Wrapper className={'flex flex-col items-center justify-start my-6'}>
      <SignUpCard />
    </Wrapper>
  )
}
