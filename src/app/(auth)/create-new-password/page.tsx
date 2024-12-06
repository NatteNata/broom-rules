import { Wrapper } from '@/shared/components'
import { CreateNewPasswordCard } from '@/widgets/auth/create-new-password-card'

export default function CreateNewPasswordPage() {
  return (
    <Wrapper className={'flex flex-col items-center justify-start my-6'}>
      <CreateNewPasswordCard />
    </Wrapper>
  )
}
