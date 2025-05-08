'use client'

import { Button, IconArrowBackOutline } from 'penguin-ui'

import { Link, Wrapper } from '@components'
import { cn } from '@utils'

import { PrivacyPolicy } from './privacy-policy'

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
