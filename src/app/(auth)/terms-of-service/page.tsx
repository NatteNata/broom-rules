'use client'

import { TermsOfService } from '@/features'
import { Wrapper } from '@/shared/components'
import { cn } from '@/shared/utils'
import { Button, IconArrowBackOutline } from '@tornata/brooms-ui'
import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <Wrapper className={'flex flex-col items-center justify-start my-6'}>
      <div className={cn('flex justify-start w-full')}>
        <Button asChild className={cn('text-light-100 mx-0 px-0')} variant={'ghost'}>
          <Link href={'/sign-up'}>
            <IconArrowBackOutline />
            Back to Sign Up
          </Link>
        </Button>
      </div>
      <TermsOfService />
    </Wrapper>
  )
}
