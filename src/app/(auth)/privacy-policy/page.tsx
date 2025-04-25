'use client'

import { PrivacyPolicy } from '@/app/(auth)/privacy-policy/privacy-policy'
import { Wrapper } from '@/components'
import Link from 'next/link'
import { Button, IconArrowBackOutline } from 'penguin-ui'
import { cn } from 'src/use-cases/utils'

export default function PrivacyPolicyPage() {
	return (
		<Wrapper
			className={'mt-0 flex flex-col items-center justify-start gap-y-6'}
		>
			<div className={cn('flex w-full justify-start')}>
				<Button
					asChild
					className={cn('mx-0 px-0 text-light-100')}
					variant={'ghost'}
				>
					<Link href={'/sign-up'}>
						<IconArrowBackOutline />
						Back to Sign Up
					</Link>
				</Button>
			</div>
			<PrivacyPolicy />
		</Wrapper>
	)
}
