'use client'

import { Wrapper } from '@components'
import { cn } from '@use-cases'
import Link from 'next/link'
import { Button, IconArrowBackOutline } from 'penguin-ui'
import { TermsOfService } from './terms-of-service'

export default function TermsOfServicePage() {
	return (
		<Wrapper className={'my-6 flex flex-col items-center justify-start'}>
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
			<TermsOfService />
		</Wrapper>
	)
}
