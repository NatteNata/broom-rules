'use client'

import { Wrapper } from '@/components/wrapper/Wrapper'
import { WtPrivacyPolicy } from '@/widgets/auth/wt-privacy-policy'
import { cn } from 'src/shared/utils'

export default function PrivacyPolicyPage() {
  return (
    <Wrapper className={cn('flex flex-col items-center justify-start my-6')}>
      <WtPrivacyPolicy />
    </Wrapper>
  )
}
