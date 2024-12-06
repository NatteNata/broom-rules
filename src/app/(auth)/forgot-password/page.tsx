import { Wrapper } from '@/shared/components'
import { ForgotPasswordCard } from '@/widgets/auth/forgot-password-card'

export default function ForgotPasswordPage() {
  return (
    <Wrapper className={'flex flex-col items-center justify-start my-6'}>
      <ForgotPasswordCard />
    </Wrapper>
  )
}
