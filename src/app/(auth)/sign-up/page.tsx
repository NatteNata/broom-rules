'use client'

import { Wrapper } from '@/components/wrapper/Wrapper'
import { WtSignUp } from '@/widgets/auth/wt-sign-up'

export default function SignUpPage() {
  return (
    <Wrapper className={'flex flex-col items-center justify-start my-6'}>
      <WtSignUp />
    </Wrapper>
  )
}
