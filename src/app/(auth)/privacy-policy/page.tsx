'use client'

import { Wrapper } from '@/components/wrapper/Wrapper'
import { cn } from '@/utils'
import { WtPrivacyPolicy } from '@/widgets/auth/wt-privacy-policy'

export default function PrivacyPolicyPage() {
  return (
    <Wrapper className={cn('flex flex-col items-center justify-start my-6')}>
      <WtPrivacyPolicy />
    </Wrapper>
  )
}
