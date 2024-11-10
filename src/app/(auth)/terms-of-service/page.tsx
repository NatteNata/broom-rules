'use client'

import Wrapper from '@/components/wrapper/Wrapper'
import { WtTermsOfService } from '@/widgets/auth/wt-terms-of-service'

export default function TermsOfServicePage() {
  return (
    <Wrapper className={'flex flex-col items-center justify-start my-6'}>
      <WtTermsOfService />
    </Wrapper>
  )
}
