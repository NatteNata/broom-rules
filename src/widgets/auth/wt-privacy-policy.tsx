import { A } from '@/components/a/A'
import { Wrapper } from '@/components/wrapper/Wrapper'
import { PrivacyPolicy } from '@/features/auth/privacy-policy'
import { cn } from '@/utils'
import { Button, IconArrowBackOutline } from '@tornata/brooms-ui'

export const WtPrivacyPolicy = () => {
  return (
    <>
      <div className={cn('flex justify-start w-full')}>
        <Button asChild className={cn('text-light-100 mx-0 px-0')} variant={'ghost'}>
          <A href={'/sign-up'}>
            <IconArrowBackOutline />
            Back to Sign Up
          </A>
        </Button>
      </div>
      <Wrapper className={cn('flex flex-col items-center justify-start mx-20')}>
        <PrivacyPolicy />
      </Wrapper>
    </>
  )
}